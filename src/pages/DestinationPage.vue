<template>
 <base-layout :page-title="loadedMemory? loadedMemory.title : 'Loading...'" page-default-back-link="/homepage">
  <h3 v-if="!loadedMemory">No memory found</h3>
  <destination-overview 
    v-else 
    :title="loadedMemory.title" 
    :image="loadedMemory.image" 
    :description="loadedMemory.description"></destination-overview>
  <h4 class="subheader">Top Attractions</h4>
  <g-map
  :disableUI="true"
  :zoom="6"
  mapType="roadmap"
  :center="loadedMemory.center"
  :markers="loadedMemory.markers"></g-map>
  <br/>
  </base-layout>
</template>

<script>
import DestinationOverview from "../components/memories/DestinationOverview.vue"
import GMap from "../components/memories/GMap.vue"
export default {
components: {
    DestinationOverview,
    GMap
},
  data() {
    return {
        destinationId: this.$route.params.id
    }
  },
  computed: {
    loadedMemory() {
        return this.$store.getters.destination(this.destinationId);
    }
  },
//   watch: {
//     '$route'(currentRoute) {
//         this.memoryId = currentRoute.params.id;
//     }
//   }
}


</script>