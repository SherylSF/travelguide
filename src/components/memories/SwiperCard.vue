<template>
  <ion-card style="border-radius: 30px">
    <swiper
      :speed="300"
      :slidesPerView="auto"
      :spaceBetween="10"
      :centeredSlides="true"
    >
      <swiper-slide v-for="c in countries" :key="c.id" :c="c">
        <!-- put IonCard inside of the swiper-slide element -->
        <div>
          <ion-card-content style="padding: 30px">
            <!-- using name from data for slide title -->
            <ion-img style="border-radius: 20px" :src="c.image" />
            <ion-item :router-link="`/countries/${c.id}`">
              <ion-label>{{ c.title }}</ion-label>
            </ion-item>
          </ion-card-content>
        </div>
      </swiper-slide>
    </swiper>
  </ion-card>
</template>

<script>
// import { Pagination } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css/bundle";
import {IonItem, IonLabel, IonImg} from "@ionic/vue";

//import {IonImg} from '@ionic/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    IonItem,
    IonLabel,
    IonImg,
  },
  // setup() {
  //   return {
  //     Pagination,
  //   };
  // },
  computed: {
    countries() {
      return this.$store.getters.countries;
    },
  },
};
</script>
