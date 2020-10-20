<template>
  <div class="number">
    <svg viewBox="-1 -1 50 50" width="50px" class="number-bg">
      <polygon
        stroke="var(--primary-color)"
        fill="transparent"
        points="27,0,35.80171894439707,5.750770752240406,46.09188309203678,7.908116907963215,48.249229247759594,18.198281055602934,54,27,48.249229247759594,35.80171894439707,46.09188309203678,46.09188309203678,35.80171894439707,48.249229247759594,27.000000000000004,54,18.198281055602937,48.2492292477596,7.908116907963219,46.09188309203679,5.75077075224041,35.80171894439708,0,27.000000000000004,5.750770752240406,18.19828105560293,7.908116907963212,7.9081169079632225,18.19828105560292,5.75077075224041"
      />
    </svg>
    <span class="number-inner" :title="`Verse ${num}`">{{ num | toArabicNumber }}</span>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.number {
  margin-right: 1rem;
  position: relative;
}
.number-bg {
  overflow: visible;
  width: 32px;
  top: 0;
  left: 0;
}
.number-inner {
  position: absolute;
  top: 0;
  left: 5px;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 1.15rem;
  line-height: 36px;
}

@media (min-width: 720px) {
  .number-bg {
    width: 50px;
  }
  .number-inner {
    font-size: 1.35rem;
    line-height: 55px;
  }
}
</style>
