<template>
   <!-- <ion-item style="padding: 10px">
    <h4>Planning Toolkit</h4>
   </ion-item> -->
   <swiper :speed="300" :slidesPerView="auto" :spaceBetween="10" :centeredSlides="true">
    <swiper-slide>
      <ion-card style="border-radius: 30px; width: 80%; height: 200px; padding: 10px 5px; background-color: var(--ion-color-secondary-contrast)">
         <ion-icon class=ion-padding-start :icon="ribbon" style="font-size: 46px"></ion-icon>
        <ion-card-header>
            <router-link style="text-decoration: none;" :to="`/countries/todo/${country.id}`" ><ion-card-title>Best Things to Do</ion-card-title></router-link>
        </ion-card-header> 
          <ion-card-content>
            <p>Discover some of the most unique and fulfilling experiences your next destination has to offer.</p>
          </ion-card-content>
       </ion-card>
     </swiper-slide>
      <swiper-slide>
      <ion-card style="border-radius: 30px; width: 80%; height: 200px; padding: 10px 5px; background-color: var(--ion-color-tertiary-contrast)">
         <ion-icon class=ion-padding-start :icon="calendar" style="font-size: 46px;"></ion-icon>
        <ion-card-header>
            <router-link style="text-decoration: none;" :to="`/countries/tovisit/${country.id}`" ><ion-card-title>When to Visit</ion-card-title></router-link>
        </ion-card-header>
          <ion-card-content>
            <p>Tips and Travel trends to help you pick the perfect time to visit this destination.</p>
          </ion-card-content>
       </ion-card>
     </swiper-slide>
      <swiper-slide>
      <ion-card style="border-radius: 30px; width: 80%; height: 200px; padding: 10px 5px; background-color: var(--ion-color-warning)">
         <ion-icon class=ion-padding-start :icon="book" style="font-size: 46px;"></ion-icon>
        <ion-card-header>
          <router-link style="text-decoration: none;" :to="`/countries/toknow/${country.id}`" ><ion-card-title>Things to Know</ion-card-title></router-link>
        </ion-card-header>
          <ion-card-content>
            <p>Golden rules to keep in mind when traveling to this destination.</p>
          </ion-card-content>
       </ion-card>
     </swiper-slide>
  </swiper>
</template>


<script>
  // import { Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css/bundle';
  import {IonIcon} from "@ionic/vue"
  import {ribbon, calendar, book} from 'ionicons/icons';
  import { IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/vue';
  //import {IonImg} from '@ionic/vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      IonIcon,
      IonCard,
      IonCardContent,
      IonCardHeader, 
      IonCardTitle
    },
    data() {
        return {ribbon, calendar, book, countryId: this.$route.params.id}
    },
    computed: {
      country() {
      return this.$store.getters.country(this.countryId);
    }
  }
};

</script>