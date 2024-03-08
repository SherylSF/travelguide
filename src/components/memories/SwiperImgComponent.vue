<template>
  <swiper :modules="[EffectCoverflow]" effect="coverflow">
    <swiper-slide><ion-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLFWdxXVcORrPoNzrreo5JOjs0Cq09PIVPTc4Yi8_veYb8k970ct9wlM2x9Dpx-A0tZM&usqp=CAU"></ion-img></swiper-slide>
    <swiper-slide><ion-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYh6CAboc5PCZNZ8NEaS-ectgP-J5P7V2Aw&usqp=CAU"></ion-img></swiper-slide>
    <swiper-slide><ion-img src="https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg"></ion-img></swiper-slide>
    ...
  </swiper>
</template>
<script>
  import { EffectCoverflow } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css/bundle';
  import {IonImg} from '@ionic/vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      IonImg
    },
    setup() {
      return {
        EffectCoverflow,
      };
    },
  };
</script>