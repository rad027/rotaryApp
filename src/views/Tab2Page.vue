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

    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content
        :pulling-icon="chevronDownCircleOutline"
        pulling-text="Pull to refresh"
        refreshing-spinner="circles"
        refreshing-text="Refreshing...">
      </ion-refresher-content>
    </ion-refresher>
          <div class="container" v-if="lists.length">
            <ion-list>
              <ion-list-header> Notifications </ion-list-header>
                <ion-item v-for="(l,li) in lists" :key="li">
                  <ion-avatar slot="start">
                    <img src="https://cdn-icons-png.flaticon.com/512/60/60977.png" />
                  </ion-avatar>
                  <ion-label>
                    <h2 class="mainTitle">{{ l.title }}</h2>
                    <h3>{{ l.formatted_date }}</h3>
                    <p>{{ l.description }}</p>
                  </ion-label>
                </ion-item>

              <!-- <ion-item>
                <ion-avatar slot="start">
                  <img src="https://cdn-icons-png.flaticon.com/512/60/60977.png" />
                </ion-avatar>
                <ion-label>
                  <h2>Han</h2>
                  <h3>Look, kid...</h3>
                  <p>I've got enough on my plate as it is, and I...</p>
                </ion-label>
              </ion-item> -->
            </ion-list>
          </div>
          <div class="container" v-else>
            <ion-list>
              <ion-list-header> Notifications </ion-list-header>
              <h2 class="text-center">Loading...</h2>
            </ion-list>
          </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { chevronDownCircleOutline } from 'ionicons/icons'
import Echo from "laravel-echo";
import axios from 'axios'

export default defineComponent({
  name: 'Tab2Page',
  components: { IonToolbar, IonTitle, IonContent, IonPage },
  data(){
    return {
      lists : []
    }
  },

  setup(){
    return {
      chevronDownCircleOutline
    }
  },

  async created(){
    this.listNotif()
    setInterval(()=>{
      this.listNotif()
    },15000)

    /* window.io = require('socket.io-client')

    window.Echo = new Echo({
      broadcaster: "socket.io",
      host: "http://localhost:6001",
    })

    window.Echo.connector.socket.on("connect", () => {
      console.log('connected')
    });

    window.Echo.connector.socket.on("reconnecting", function () {
      console.log("CONNECTING");
    });

    window.Echo.connector.socket.on("disconnect", function () {
      console.log("DISCONNECTED");
    });

    //check new notif
    window.Echo.channel('notifications')
      .listen('.newNotification',({ data })=>{
      console.log(data)
    }) */
  },
  methods :{
    async listNotif(){
      axios.post('http://localhost/api/notification/list')
        .then(res =>{
          this.lists = res.data.data
        })
    },
    async doRefresh(event){
      axios.post('http://localhost/api/notification/list')
        .then(res =>{
          this.lists = res.data.data
          event.target.complete()
        })
    }
  }
});
</script>

<style scoped>
ion-toolbar {
  --background : #479ECA;
  --color : #eee;
  padding : 25px 25px;
}
.mainTitle {
  font-weight: bolder;
}
.text-center {
  text-align : center
}
</style>