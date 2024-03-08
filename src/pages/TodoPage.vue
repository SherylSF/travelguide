<template>
 <base-layout :page-title="loadedMemory? loadedMemory.title : 'Loading...'" :page-default-back-link="`/countries/${loadedMemory.id}`">
  <h3 v-if="!loadedMemory">No memory found</h3>
  <todo-overview 
    v-else 
    :title="loadedMemory.planningtools[0].title" 
    :image="loadedMemory.planningtools[0].image" 
    :subtitle1="loadedMemory.planningtools[0].subtitle1"
    :description1="loadedMemory.planningtools[0].description1"
    :subtitle2="loadedMemory.planningtools[0].subtitle2"
    :description2="loadedMemory.planningtools[0].description2"></todo-overview>
  </base-layout>
</template>

<script>
import TodoOverview from "../components/memories/TodoOverview.vue"
export default {
components: {
    TodoOverview
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

