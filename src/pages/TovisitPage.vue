<template>
 <base-layout :page-title="loadedMemory? loadedMemory.title : 'Loading...'" :page-default-back-link="`/countries/${loadedMemory.id}`">
  <h3 v-if="!loadedMemory">No memory found</h3>
  <tovisit-overview 
    v-else 
    :title="loadedMemory.planningtools[1].title" 
    :image="loadedMemory.planningtools[1].image" 
    :subtitle1="loadedMemory.planningtools[1].subtitle1"
    :description1="loadedMemory.planningtools[1].description1"
    :subtitle2="loadedMemory.planningtools[1].subtitle2"
    :description2="loadedMemory.planningtools[1].description2"></tovisit-overview>
  </base-layout>
</template>

<script>
import TovisitOverview from "../components/memories/TodoOverview.vue"
export default {
components: {
    TovisitOverview
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