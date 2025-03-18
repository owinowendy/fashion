<template>
  <div class="root">
    <title-main align="center" primary="Featured" secondary="Products" />
    <div class="carousel-wrap">
      <v-btn class="nav prev" @click="slickPrev">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn class="nav next" @click="slickNext">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <div v-if="loaded">
        <splide
          ref="slider"
          :options="slickOptions"
        >
          <splide-slide
            v-for="(item, index) in dataProducts"
            :key="index"
          >
            <div class="item">
              <simple-thumb-card
                :title="item.title"
                :price="item.price"
                :img="item.img"
              />
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './featured-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../Title';
import SimpleThumbCard from '../Cards/SimpleThumb';

const dataProducts = [
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[17],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[18],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[19],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[20],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[21],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[22],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[23],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[24],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[25],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[20],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[22],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[23],
  },
];

export default {
  components: {
    'title-main': Title,
    Splide,
    SplideSlide,
    SimpleThumbCard,
  },
  data() {
    return {
      loaded: false,
      dataProducts,
      slickOptions: {
        pagination: true,
        arrows: false,
        speed: 500,
        perPage: 6,
        perMove: 1,
        autoplay: true,
        interval: 7000,
        direction: 'ltr',
        breakpoints: {
          1024: {
            perPage: 4,
            type: 'loop',
          },
          600: {
            perPage: 2,
          },
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
  methods: {
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    },
  },
};
</script>
