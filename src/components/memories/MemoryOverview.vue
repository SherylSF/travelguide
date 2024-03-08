<template>
    <h2 class="ion-text-center subheader">{{ title }}</h2>
    <ion-img :src="image" :alt="title"> </ion-img>
    <p class="ion-text-justify description">{{ description }}</p>
</template>

<script>
import {IonImg} from '@ionic/vue';

export default {
  props: ['title', 'image', 'author','description',],
  components: {
    IonImg,
  },
}

</script>