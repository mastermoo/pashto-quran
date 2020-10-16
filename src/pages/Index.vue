<template>
  <Layout>
    <surah-row v-for="surah in surahs" :key="surah.id" :surah="surah" />
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
import SurahRow from "../components/SurahRow"

export default {
  components: {
    SurahRow
  },
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