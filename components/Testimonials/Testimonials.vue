<template>
  <div class="root">
    <div class="img-slider">
      <splide
        ref="sliderImage"
        :options="settingsImg"
        class="slider-image"
        @splide:move="handleSyncImage"
      >
        <splide-slide
          v-for="(item, index) in testiContent"
          :key="index"
        >
          <div class="item">
            <v-parallax
              class="parallax"
              :src="item.img"
              :height="700"
              alt="testimonial"
            />
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="text-slider">
      <v-icon class="icon">
        mdi-format-quote-close
      </v-icon>
      <nav>
        <v-btn variant="text" class="nav-button prev" @click="slickPrev">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn variant="text" class="nav-button next" @click="slickNext">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </nav>
      <div>
        <h3 class="title-main use-text-title">
          {{ $t('fashionLanding.testimonial_title') }}
        </h3>
        <div class="carousel">
          <splide
            ref="sliderText"
            :options="settingsText"
            class="slider-text"
            @splide:move="handleSyncText"
          >
            <splide-slide
              v-for="(item, index) in testiContent"
              :key="index"
            >
              <div class="item">
                <p class="use-text-paragraph">
                  {{ item.text }}
                </p>
                <v-divider class="divider" />
                <h6 class="use-text-subtitle2">
                  {{ item.name }}
                </h6>
                <p class="use-text-paragraph">
                  {{ item.title }}
                </p>
              </div>
            </splide-slide>
          </splide>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

const testiContent = [
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    img: imgAPI.fashion[26],
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    img: imgAPI.fashion[27],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    img: imgAPI.fashion[28],
    name: 'Jena Doe',
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    img: imgAPI.fashion[29],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
];

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      testiContent,
      settingsImg: {
        pagination: false,
        type: 'fade',
        speed: 500,
        autoplay: true,
        interval: 10000,
        arrows: false,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
      settingsText: {
        pagination: false,
        type: 'loop',
        speed: 500,
        autoplay: true,
        interval: 10000,
        arrows: false,
        updateOnMove: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
    };
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
