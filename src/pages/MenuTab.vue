<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Destinations</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item @click="menuNavigation('/destinations/d1')">Africa</ion-item>
        <ion-item @click="menuNavigation('/destinations/d2')">Antarctica</ion-item>
        <ion-item @click="menuNavigation('/destinations/d3')">Asia</ion-item>
        <ion-item>Carribean Islands</ion-item>
        <ion-item>Central America</ion-item>
        <ion-item>Europe</ion-item>
        <ion-item>MiddleEast</ion-item>
        <ion-item>North America</ion-item>
        <ion-item>Pacific</ion-item>
         <ion-item>South America</ion-item>
      </ion-list>
      <ion-item>
        <h4 @click="menuNavigation('/memories')">Stories</h4>
      </ion-item>
    </ion-content>
  </ion-menu>

</template>
<style>
.my-custom-menu {
  --width: 500px;
}
</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonTitle, 
  IonToolbar,
  menuController
} from '@ionic/vue';


export default {
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonTitle, 
    IonToolbar,
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    menuNavigation(url) {
      menuController.close("first");
      this.$router.push(url)
    }
  }
};
</script>