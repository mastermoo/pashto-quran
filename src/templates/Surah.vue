<template>
  <surah :surah="$page.surah" />
</template>

<page-query>
query ($id: ID!) {
  surah(id: $id) {
    id,
    title,
    titleAr,
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
      title: this.$page.surah.title,
      meta: [
        {
          property: 'og:image',
          content: `https://quran.tolafghan.com/surah-thumbnails/surah-${this.$page.surah.id}.png`,
        },
      ],
    }
  },
}
</script>
