<template>
  <surah :surah="$page.surah" />
</template>

<page-query>
query {
  surah(id: "001") {
    id,
    title,
    verses {
      index,
      content,
      translation
    },
    prevSurah {
      id,
      title
    },
    nextSurah {
      id,
      title
    }
  },
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.surah.title
    }
  },
}
</script>