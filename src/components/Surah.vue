<template>
  <Layout>
    <header>
      <span class="header-navItem">
        <g-link
          v-if="nextLink"
          :to="nextLink"
          :title="surah.nextSurah.title"
          class="header-navLink"
        >
          <left-arrow />
        </g-link>
      </span>
      <div class="headline">
        <angle class="angle" />
        {{ surah.titleAr }}
        <select @change="openSurah" :value="surah.id">
          <option
            v-for="s in surahs"
            :key="s.id"
            :value="s.id"
          >{{ s.titleAr }} - {{ s.id | toArabicNumber }}</option>
        </select>
      </div>
      <span class="header-navItem">
        <g-link
          v-if="prevLink"
          :to="prevLink"
          :title="surah.prevSurah.title"
          class="header-navLink"
        >
          <right-arrow />
        </g-link>
      </span>
    </header>

    <h1 v-if="pageHasBismillah" class="bismillah">{{ bismillah }}</h1>
    <article dir="rtl">
      <verse v-for="verse in visibleVerses" :key="verse.index" :verse="verse" />
      <infinite-loading @infinite="infiniteHandler" spinner="spiral" />
    </article>
  </Layout>
</template>

<static-query>
query {
  allSurah(order: ASC, sortBy: "id") {
    edges {
      node {
        id
        titleAr
      }
    }
  }
}

</static-query>

<script>
import Verse from "./Verse";
import LeftArrow from "~/assets/arrow-left.svg";
import RightArrow from "~/assets/arrow-right.svg";
import Angle from "~/assets/chevron-down.svg";

const VERSES_PER = 25

export default {
  components: {
    LeftArrow,
    RightArrow,
    Angle,
    Verse,
  },
  props: ["surah"],
  data() {
    return {
      versesLoaded: VERSES_PER
    }
  },
  methods: {
    openSurah(e) {
      this.$router.push({ path: `/${e.target.value}` });
    },
    infiniteHandler($state) {
      if (this.versesLoaded >= this.surah.verses.length) {
        $state.complete()
      } else {
        this.versesLoaded += VERSES_PER
        $state.loaded()
      }
    }
  },
  computed: {
    bismillah() {
      return "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
    },
    pageHasBismillah() {
      return !["1", "9"].includes(this.surah.id);
    },
    prevLink() {
      if (this.surah.prevSurah) {
        return `/${this.surah.prevSurah.id}`;
      }
    },
    nextLink() {
      if (this.surah.nextSurah) {
        return `/${this.surah.nextSurah.id}`;
      }
    },
    surahs() {
      return this.$static.allSurah.edges.map((o) => o.node);
    },
    visibleVerses() {
      return this.surah.verses.slice(0, this.versesLoaded)
    }
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--bg-transparent);
  backdrop-filter: blur(3px);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 50px;
}
.header-navItem {
  padding: 12px 1.5rem 5px;
}
.header-navItem svg {
  fill: var(--primary-color-dark);
  width: 16px;
}

article {
  max-width: 760px;
  margin: 3rem auto;
  padding-left: 20px;
  padding-right: 20px;
}

.headline {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
}
.headline select {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.angle {
  margin-right: 5px;
  width: 10px;
  height: 14px;
  fill: var(--body-color);
}

.bismillah {
  text-align: center;
}

/* fading in new verses */
.fade-enter-active,
.fade-leave-active {
  transition: ease opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>