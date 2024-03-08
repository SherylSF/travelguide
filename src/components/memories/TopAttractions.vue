<template>
   <!-- <ion-item style="padding: 10px">
    <h4>Top Attractions</h4>
   </ion-item> -->
   <swiper :speed="300" :slidesPerView="auto" :spaceBetween="10" :centeredSlides="true">
    <swiper-slide v-for="att in country.attractions" :key="att.id" :att="att">
    <!-- put IonCard inside of the swiper-slide element -->
      <ion-card style="width: 80%; padding: 12px; border-radius: 20px;">
          <ion-card-header>
            <ion-card-subtitle>{{att.category}}</ion-card-subtitle>
             <ion-card-title>{{att.title}}</ion-card-title>
          </ion-card-header>
          <ion-card-content style="text-align: justify;" >
            <p>{{att.description}}</p>
          </ion-card-content>
    </ion-card>
     </swiper-slide>
  </swiper>
</template>


<script>
  // import { Pagination } from 'swiper';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';

  import 'swiper/css/bundle';

  //import {IonImg} from '@ionic/vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      IonCard,
      IonCardHeader, 
      IonCardSubtitle, 
      IonCardTitle,
      IonCardContent 
    },
     data() {
    return {
        countryId: this.$route.params.id
    }
  },
   
    // setup() {
    //   return {
    //     Pagination,
    //   };
    // },
    computed: {
      country() {
      return this.$store.getters.country(this.countryId);
    }
  }

  };
</script>