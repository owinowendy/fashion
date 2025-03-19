<template>
  <footer class="root">
    <v-container class="max-lg">
      <div class="logo">
        <img :src="logo" alt="logo">
      </div>
      <div class="subscribe">
        <h5 class="use-text-subtitle">
          {{ $t('fashionLanding.subscribe_title') }}
        </h5>
        <div class="form">
          <form>
            <v-text-field
              :placeholder="$t('fashionLanding.subscribe_email')"
              class="field"
              full-width
            />
            <v-btn variant="outlined" class="button">
              {{ $t('fashionLanding.subscribe_button') }}
            </v-btn>
          </form>
        </div>
      </div>
      <nav>
        <ul>
          <li
            v-for="(item, index) in menu"
            :key="index"
          >
            <a :href="'#' + item">
              {{ $t('fashionLanding.header_' + item) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="socmed">
        <v-btn variant="flat" icon class="icon">
          <i class="ion-logo-twitter " />
        </v-btn>
        <v-btn variant="flat" icon class="icon">
          <i class="ion-logo-facebook" />
        </v-btn>
        <v-btn variant="flat" icon class="icon">
          <i class="ion-logo-instagram" />
        </v-btn>
      </div>
    </v-container>
    <div class="copyright">
      <p class="body-2 text-center">
        &copy;
        {{ brand.fashion.footerText }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '@/assets/images/fashion-logo.png'
import brand from '@/assets/text/brand';
import menu from '../Header/menu';

export default {
  data: () => ({
    logo,
    brand,
    menu,
  }),

mounted() {
    this.updateCopyrightText();
  },
  methods: {
    updateCopyrightText() {
      this.brand.fashion.footerText = 'Findme 2025';
    }
  }
};
</script>
