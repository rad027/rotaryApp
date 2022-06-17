<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title class="ion-text-center" style="padding : 10px 45px">
        <img :src="require('../assets/images/logo/logo.png')" style="width : 350px" />
      </ion-title>    
    </ion-toolbar>
    <ion-content :fullscreen="true">
    
      <!-- <ExploreContainer name="Tab 1 page" /> -->
      <div>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <img :src="require('@/assets/images/slide/mainimage01.jpg')" style="height : 180px; width: 100vw; object-fit: unset;" />
        </ion-slide>
        <ion-slide>
          <img :src="require('@/assets/images/slide/mainimage02.jpg')" style="height : 180px; width: 100vw; object-fit: unset;" />
        </ion-slide>
        <ion-slide>
          <img :src="require('@/assets/images/slide/mainimage03.jpg')" style="height : 180px; width: 100vw; object-fit: unset;" />
        </ion-slide>
        <ion-slide>
          <img :src="require('@/assets/images/slide/mainimage04.jpg')" style="height : 180px; width: 100vw; object-fit: unset;" />
        </ion-slide>
      </ion-slides>

        <ion-grid>
          <ion-row class="ion-text-center">
            <ion-col>
              <div class="main-box">
                <div class="sub-box">
                  <ion-icon name="chatbubble-ellipses-outline" size="large"></ion-icon>
                  <h4 class="box-title">Sample Box 12</h4>
                </div>
              </div>
            </ion-col>
            <ion-col>
              <div class="main-box">
                <div class="sub-box">
                  <ion-icon name="notifications-outline" size="large"></ion-icon>
                  <h4 class="box-title">Sample Box 2</h4>
                </div>
              </div>
            </ion-col>
            <ion-col>
              <div class="main-box">
                <div class="sub-box">
                  <ion-icon name="calendar-outline" size="large"></ion-icon>
                  <h4 class="box-title">Sample Box 3</h4>
                </div>
              </div>
            </ion-col>
            <ion-col>
              <div class="main-box">
                <div class="sub-box">
                  <ion-icon name="log-in-outline" size="large"></ion-icon>
                  <h4 class="box-title">Sample Box 4</h4>
                </div>
              </div>
            </ion-col>
            <ion-col>
              <div class="main-box">
                <div class="sub-box">
                  <ion-icon name="book-outline" size="large"></ion-icon>
                  <h4 class="box-title">Sample Box 5</h4>
                </div>
              </div>
            </ion-col>
            <ion-col>
              <div class="main-box">
                <div class="sub-box">
                  <ion-icon name="git-network-outline" size="large"></ion-icon>
                  <h4 class="box-title">Sample Box 6</h4>
                </div>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonSlides, IonSlide, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
/* import ExploreContainer from '@/components/ExploreContainer.vue'; */

export default  defineComponent({
  name: 'Tab1Page',
  components: { /* ExploreContainer,  */IonToolbar, IonTitle, IonContent, IonPage, IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      autoplay : {
        delay : 2500
      }
    };
    return { slideOpts }
  }
});
</script>

<style scoped>
ion-toolbar {
  --background : #479ECA;
  --color : #eee;
  padding : 25px 25px;
}
ion-icon, .box-title {
  color : #fff;
}
ion-row {
  display: grid;
  grid-template-columns: 50% 50%;
}
ion-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* ion-image {
  height: 100px;
} */
div.main-box {
  width: 45vw;
  height : 160px;
  border-radius : 10px 10px;
  background-color : #479FC9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 0px;
}
</style>