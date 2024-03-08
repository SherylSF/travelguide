<template>
 <base-layout :page-title="loadedMemory? loadedMemory.title : 'Loading...'" :page-default-back-link="`/countries/${loadedMemory.id}`">
  <h3 v-if="!loadedMemory">No memory found</h3>
  <toknow-overview 
    v-else 
    :title="loadedMemory.planningtools[2].title" 
    :image="loadedMemory.planningtools[2].image" 
    :subtitle1="loadedMemory.planningtools[2].subtitle1"
    :description1="loadedMemory.planningtools[2].description1"
    :subtitle2="loadedMemory.planningtools[2].subtitle2"
    :description2="loadedMemory.planningtools[2].description2"></toknow-overview>
  </base-layout>
</template>

<script>
import ToknowOverview from "../components/memories/TodoOverview.vue"
export default {
components: {
    ToknowOverview
},
  data() {
    return {
        countryId: this.$route.params.id
    }
  },
  computed: {
    loadedMemory() {
        return this.$store.getters.country(this.countryId);
    }
  },
//   watch: {
//     '$route'(currentRoute) {
//         this.memoryId = currentRoute.params.id;
//     }
//   }
}
</script>