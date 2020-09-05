<template>
  <surah :surah="$page.surah" />
</template>

<page-query>
query ($id: ID!) {
  surah(id: $id) {
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