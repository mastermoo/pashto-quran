<template>
  <g-link class="row" :to="`/${surah.id}`">
    <section class="row-inner">
      <div style="display: flex; margin-right: .5rem; transform: scale(0.75)">
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
  </g-link>
</template>

<script>
import Number from "./Number";

export default {
  components: { Number },
  props: ['surah']
}
</script>

<style scoped>
.row {
  display: block;
  width: 100%;
  color: inherit;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid var(--border-color);
}
.row:hover {
  background: rgba(255,255,255,0.1);
}
.row-inner {
  display: flex;
  align-items: center;
  max-width: 540px;
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
</style>