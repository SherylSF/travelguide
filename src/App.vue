<template>
  <ion-app>
    <Menu></Menu>
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Menu from "./pages/MenuTab.vue"
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  }
});
</script>