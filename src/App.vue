/* eslint-disable */
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { FCM } from '@capacitor-community/fcm';
import { Plugins, Capacitor } from '@capacitor/core';
const { PushNotifications } = Plugins;

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  data(){
    return {
      fcm: new FCM(),
      /* echo : new Echo({
        broadcaster: "socket.io",
        host: "localhost:6001",
      }),
      io : require('socket.io-client') */
    }
  },
  mounted(){
    const device = Capacitor.getPlatform();

    if(device == "ios") {
     PushNotifications.requestPermissions().then(result => {
      alert("result " + JSON.stringify(result));
    });
    }else{
      PushNotifications.requestPermission().then(result => {
        console.log('result ' + JSON.stringify(result));
        PushNotifications.register();
      });
      PushNotifications.addListener('registration', (token) => {
        console.log('Push registration success, token: ' + token.value);
      });
    }
    PushNotifications.addListener("registrationError", (error) => {
        console.log(`error on register ${JSON.stringify(error)}`);
    }),
    PushNotifications.addListener("pushNotificationReceived", (notification) => {
    console.log(`notification ${JSON.stringify(notification)}`);
    }),
    PushNotifications.addListener("pushNotificationActionPerformed", async (notification) => {
      alert("notification " + notification);
      console.log("notification succeeded");
    }),
    PushNotifications.register();

  }

});
</script>
