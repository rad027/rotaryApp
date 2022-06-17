<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title class="ion-text-center" style="padding : 10px 45px">
        <ion-img :src="require('@/assets/images/logo/logo.png')" width="350px"></ion-img>
      </ion-title>    
    </ion-toolbar>
    <ion-content :fullscreen="true">
      
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonToolbar, IonTitle, IonContent, IonPage }
});
</script>

<style scoped>
ion-toolbar {
  --background : #479ECA;
  --color : #eee;
  padding : 25px 25px;
}
</style>