<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
         <ion-menu-button side="start"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h3 class="ion-text-center">Your Travel Guide</h3>
      <cover-flow></cover-flow>
      <br/>
      <div style="padding-left: 12px;">
      <h5>Plan Your Trip</h5>
      <h4>Where to Next?</h4>
      </div>
      <card-country></card-country>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  // IonTitle,
  IonContent,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";
// import MenuTab from "./MenuTab.vue"
import CoverFlow from '../components/memories/SwiperImgComponent.vue'
import CardCountry from '../components/memories/SwiperCard.vue'
export default {
    components:{
        IonPage,
        IonHeader,
        IonToolbar,
        // IonTitle,
        IonContent,
        IonMenuButton,
        IonButtons,
        CoverFlow,
        CardCountry
    },
  computed: {
    countries() {
        return this.$store.getters.countries
    }
  }
};
</script>