<template>
  <section class="verse" :id="verse.index">
    <p class="number" :title="`Verse ${verse.index}`">{{ arabicNumber }}</p>
    <p class="original">{{ verse.content }}</p>
    <p class="translation">{{ verse.translation }}</p>
  </section>
</template>

<script>
const arabicDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export default {
  props: ["verse"],
  computed: {
    arabicNumber() {
      return this.verse.index.toString().replace(/[0-9]/g, (w) => arabicDigits[+w]);
    }
  },
};
</script>

<style scoped>
.verse {
  padding: 0.85rem 0;
  border-bottom: 1px solid #eeeeee;
}

.number {
  margin: 0 0 0.5rem;
}
.original {
  font-size: 2.25rem;
  color: green;
  margin: 0 0 0.5rem;
}

.translation {
  color: #555555;
  font-size: 1.5rem;
  margin: 0;
}
</style>