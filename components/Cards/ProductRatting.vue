<template>
  <div class="product-ratting">
    <v-btn
      :href="link.fashion.detail"
      class="btn-wrap"
      variant="text"
    >
      <span class="figure">
        <img :src="img" alt="text">
        <span class="figcaption">Sale</span>
      </span>
      <span class="ratting">
        <v-icon
          v-for="index in ratting"
          :key="index"
          class="star-icon"
        >
          mdi-star
        </v-icon>
      </span>
      <span class="text">
        {{ text }}
      </span>
      <span class="use-text-subtitle2">
        <strong>
          {{ price }}
        </strong>
      </span>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
import link from '@/assets/text/link';

export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    ratting: {
      type: Number,
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
