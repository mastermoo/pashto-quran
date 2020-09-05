<template>
  <Layout>
    <header class="header">
      <span>
        <g-link v-if="nextLink" :to="nextLink">← {{ surah.nextSurah.title }}</g-link>
      </span>
      <div class="headline">
        {{ parseInt(surah.id) }} - {{ surah.title }} <span style="position: relative; top: 6px;">&#xfe40;</span>
        <select @change="openSurah" :value="surah.id">
          <option v-for="s in surahs" :key="s.id" :value="s.id">{{ parseInt(s.id) }} - {{ s.title }}</option>
        </select>
      </div>
      <span>
        <g-link v-if="prevLink" :to="prevLink">{{ surah.prevSurah.title }} →</g-link>
      </span>
    </header>

    <h1 v-if="!pageIsAlFatiha" class="bismillah">{{ bismillah }}</h1>
    <article dir="rtl">
      <verse
        v-for="verse in surah.verses"
        :key="verse.index"
        :verse="verse"
      />
    </article>
  </Layout>
</template>

<static-query>
query {
  allSurah(order: ASC, sortBy: "id") {
    edges {
      node {
        id
        title
      }
    }
  }
}

</static-query>

<script>
import Verse from "./Verse";

export default {
  components: {
    Verse
  },
  props: ["surah"],
  methods: {
    openSurah(e) {
      this.$router.push({ path: `/${e.target.value}` });
    }
  },
  computed: {
    bismillah() {
      return "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
    },
    pageIsAlFatiha() {
      return this.surah.id === "001";
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
      return this.$static.allSurah.edges.map(o => o.node);
    }
  },
};
</script>

<style scoped>
main {
  width: 100%;
  padding: 0 2rem;
  max-width: 720px;
  margin: 0 auto;
}

.headline {
  position: relative;
}
.headline select {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bismillah {
  text-align: center;
}
</style>