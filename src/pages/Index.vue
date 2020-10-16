<template>
  <Layout>
    <g-link v-for="surah in surahs" :key="surah.id" class="row" :to="`/${surah.id}`">
      <section class="row-inner">
        <div style="display: flex">
          <number :num="parseInt(surah.id)" />
        </div>
        <article class="row-content">
          <div style="flex: 1;">
            <h3>{{ surah.title }}</h3>
            <p>{{ surah.count }} verses</p>
          </div>
          <h2 class="row-title">{{ surah.titleAr }}</h2>
        </article>
      </section>
      <!-- <div class="line"></div> -->
    </g-link>
  </Layout>
</template>

<static-query>
query {
  allSurah(order: ASC, sortBy: "id") {
    edges {
      node {
        id
        title
        titleAr
        count
      }
    }
  }
}
</static-query>

<script>
import Number from "../components/Number";

export default {
  components: { Number },

  metaInfo() {
    return {
      title: 'Read Quran with Pashto Translation'
    }
  },
  computed: {
    surahs() {
      return this.$static.allSurah.edges.map((o) => o.node);
    },
  }
}
</script>

<style scoped>
.row {
  display: block;
  width: 100%;
  color: inherit;
  padding: 2rem 0;
}
.row:hover {
  background: rgba(255,255,255,0.1);
}
.row-inner {
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.row-content {
  display: flex;
  align-items: center;
  flex: 1;
}
.row h2, .row h3 {
  margin: 0;
}
.row p {
  margin: 0;
}

.line {
  width: 100%;
  height: 1px;
  display: block;
  background: var(--border-color);
  margin: 2.75rem 0 2.75rem 1rem;
}
</style>