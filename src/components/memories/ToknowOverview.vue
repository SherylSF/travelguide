<template>
    <ion-img :src="image" :alt="title"> </ion-img>
    <h2 class="ion-text-center">{{ title }}</h2>
    <h4>{{ subtitle1 }}</h4>
    <p style="padding: 16px;" class="ion-text-justify">{{ description1 }}</p>
    <h4>{{ subtitle2 }}</h4>
    <p style="padding: 16px;" class="ion-text-justify">{{ description2 }}</p>
</template>

<script>
import {IonImg} from '@ionic/vue';

export default {
  props: ['title', 'image', 'subtitle1', 'description1', 'subtitle2', 'description2'],
  components: {
    IonImg,
    // IonLabel,
  },
}
