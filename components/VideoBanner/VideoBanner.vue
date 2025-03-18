<template>
  <div class="root">
    <div class="video">
      <div class="overlay" />
      <img v-if="!play || isMobile" :src="imgAPI.fashion[0]" alt="cover">
      <div v-if="yt.use">
        <YouTube
          v-if="isDesktop"
          ref="youtube"
          :src="videoId"
          :vars="playerVars"
          :width="1080"
          :height="720"
          @ready="playing"
          @state-change="ended"
        />
      </div>
      <div class="caption">
        <v-container class="max-md">
          <hidden point="mdDown">
            <v-btn
              v-if="play"
              icon
              variant="text"
              class="btn-play"
              @click="togglePause()"
            >
              <i v-if="playCtrl" class="ion-ios-pause-outline" />
              <i v-else class="ion-ios-play-outline" />
            </v-btn>
          </hidden>
          <h6 class="use-text-subtitle">
            {{ $t('fashionLanding.banner_title') }}
          </h6>
          <h2 class="use-text-title">
            #BEanICON
          </h2>
          <v-btn
            v-if="loaded"
            v-smooth-scroll="{ offset: 100 }"
            icon
            variant="text"
            size="large"
            class="arrow anchor-link scrollactive-item"
            href="#promotions"
          >
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import youtube from '@/config/youtube';
import Hidden from '../Hidden';

export default {
  components: {
    Hidden,
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      videoId: '3_VKCIKsn80',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8004',
      },
      yt: youtube,
      play: false,
      playCtrl: true,
      cover: imgAPI.fashion[0],
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    playing() {
      this.play = true;
      this.playCtrl = true;
    },
    ended(val) {
      if (val.data === 0) {
        this.player.playVideo();
      }
    },
    togglePause() {
      this.playCtrl = !this.playCtrl;
      if (this.playCtrl) {
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }
    },
  },
};
</script>
