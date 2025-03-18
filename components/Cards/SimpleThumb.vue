<template>
  <v-btn
    :href="link.fashion.detail"
    variant="plain"
    class="simple-thumb"
  >
    <span class="wrap">
      <span class="figure">
        <img :src="img" alt="title">
      </span>
      <span class="text">{{ title }}</span>
      <span class="price">
        <strong>{{ price }}</strong>
      </span>
    </span>
  </v-btn>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
import link from '@/assets/text/link';

export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      link,
    };
  },
};
</script>
