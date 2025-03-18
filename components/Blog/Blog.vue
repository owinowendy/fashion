<template>
  <div class="root">
    <div class="text-slider">
      <h3 class="title-main use-text-title" :class="[ isMobile ? 'text-center' : 'text-left' ]">
        {{ $t('fashionLanding.blog_title') }}
      </h3>
      <div class="carousel">
        <splide
          ref="sliderText"
          :options="settingsText"
          class="slider-text"
          @splide:move="handleSyncText"
        >
          <splide-slide
            v-for="(item, index) in blogContent"
            :key="index"
          >
            <div class="item">
              <h6 class="use-text-title">
                {{ item.title }}
              </h6>
              <p class="use-text-paragraph">
                {{ item.desc }}
              </p>
              <v-btn variant="text" class="button">
                {{ $t('fashionLanding.read_more') }}
              </v-btn>
            </div>
          </splide-slide>
        </splide>
      </div>
      <nav>
        <v-btn variant="text" class="nav-button prev" @click="slickPrev">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn variant="text" class="nav-button next" @click="slickNext">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </nav>
    </div>
    <div class="img-slider">
      <splide
        ref="sliderImage"
        :options="settingsImg"
        class="slider-image"
        @splide:move="handleSyncImage"
      >
        <splide-slide
          v-for="(item, index) in blogContent"
          :key="index"
        >
          <div class="item">
            <v-parallax
              class="parallax"
              :src="item.img"
              :height="700"
              alt="blog"
            />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

const blogContent = [
  {
    img: imgAPI.fashion[30],
    title: 'Proin lacinia erat ac',
    desc:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[31],
    title: 'Proin lacinia erat ac',
    desc:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[32],
    title: 'Proin lacinia erat ac',
    desc:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[33],
    title: 'Proin lacinia erat ac',
    desc:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[34],
    title: 'Proin lacinia erat ac',
    desc:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
];

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      blogContent,
      settingsImg: {
        pagination: false,
        type: 'fade',
        arrows: false,
        rewind: true,
        direction: 'ltr',
      },
      settingsText: {
        pagination: false,
        type: 'loop',
        speed: 500,
        rewind: true,
        cover: true,
        arrows: false,
        direction: 'ltr',
      },
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.smAndDown;
      return xsDown;
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.settingsImg.direction = 'rtl';
        this.settingsText.direction = 'rtl';
      } else {
        this.settingsImg.direction = 'ltr';
        this.settingsText.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    slickNext() {
      this.$refs.sliderText.go('>');
    },
    slickPrev() {
      this.$refs.sliderText.go('<');
    },
    handleSyncText(slide) {
      this.$refs.sliderImage.go(slide.index);
    },
    handleSyncImage(slide) {
      this.$refs.sliderText.go(slide.index);
    },
  },
};
</script>
