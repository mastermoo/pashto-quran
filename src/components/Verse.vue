<template>
  <section class="verse" :id="verse.index">
    <div class="prefix">
      <div class="line"></div>
      <number :num="verse.index" />
    </div>
    <div class="content">
      <p class="original">{{ verse.content }}</p>
      <p class="translation">{{ verse.translation }}</p>
    </div>
  </section>
</template>

<script>
import Number from "./Number";

export default {
  components: { Number },
  props: ["verse"],
};
</script>

<style scoped>
.verse {
  position: relative;
}

.prefix {
  display: flex;
  align-items: center;
}

.prefix .line {
  width: 100%;
  height: 1px;
  display: block;
  background: var(--border-color);
  margin: 2.75rem 0 2.75rem 1rem;
}

@media (min-width: 720px) {
  .content {
    margin-left: 60px;
  }
}

.original {
  font-size: 2rem;
  color: var(--primary-color);
  margin: 0 0 0.5rem;
}

.translation {
  font-size: 1.75rem;
  margin: 0;
}
</style>