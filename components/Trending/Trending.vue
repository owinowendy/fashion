<template>
  <div class="root">
    <hidden point="xsDown">
      <div class="grid-25">
        <img :src="imgAPI.fashion[8]" alt="trending">
        <v-btn variant="text" class="overlay">
          <h5 class="use-text-subtitle2">
            Autumn Show
          </h5>
        </v-btn>
      </div>
      <div class="grid-50">
        <img :src="imgAPI.fashion[9]" alt="trending">
        <v-btn variant="text" class="overlay">
          <h5 class="use-text-subtitle2">
            New Trending
          </h5>
          <h3 class="use-text-title">
            2020
          </h3>
        </v-btn>
      </div>
      <div class="grid-25">
        <img :src="imgAPI.fashion[10]" alt="trending">
        <v-btn variant="text" class="overlay">
          <h5 class="use-text-subtitle2">
            Man Collection
          </h5>
        </v-btn>
      </div>
    </hidden>
    <hidden v-if="loaded" point="smUp">
      <splide
        ref="slick"
        :options="slickOptions"
      >
        <splide-slide>
          <div class="grid-25">
            <img :src="imgAPI.fashion[8]" alt="trending">
            <v-btn variant="text" class="overlay">
              <h5 class="use-text-subtitle2">
                Autumn Show
              </h5>
            </v-btn>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="grid-50">
            <img :src="imgAPI.fashion[9]" alt="trending">
            <v-btn variant="text" class="overlay">
              <h5 class="use-text-subtitle2">
                New Trending
              </h5>
              <h3 class="use-text-title">
                2020
              </h3>
            </v-btn>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="grid-25">
            <img :src="imgAPI.fashion[10]" alt="trending">
            <v-btn variant="text" class="overlay">
              <h5 class="use-text-subtitle2">
                Man Collection
              </h5>
            </v-btn>
          </div>
        </splide-slide>
      </splide>
    </hidden>
  </div>
</template>

<style lang="scss" scoped>
@import './trending-stye.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../Hidden';

export default {
  components: {
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      imgAPI,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 1,
        arrows: false,
        type: 'loop',
        perMove: 1,
        autoplay: true,
        interval: 7000,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
};
</script>
