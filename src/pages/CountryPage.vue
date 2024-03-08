<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/homepage"
  >
    <h3 v-if="!loadedMemory">No memory found</h3>
    <destination-overview
      v-else
      :title="loadedMemory.title"
      :image="loadedMemory.image"
      :description="loadedMemory.description"
    >
    </destination-overview>
    <h4 class="subheader">Planning Toolkit</h4>
    <planning-tool></planning-tool>
    <h4 class="subheader">Top Attractions</h4>
    <g-map
      :disableUI="true"
      :zoom="6"
      mapType="roadmap"
      :center="loadedMemory.center"
      :markers="loadedMemory.markers"
    ></g-map>
    <br />
    <top-attractions></top-attractions>
  </base-layout>
</template>

<script>
import DestinationOverview from "../components/memories/DestinationOverview.vue";
import PlanningTool from "../components/memories/PlanningToolkit.vue";
import TopAttractions from "../components/memories/TopAttractions.vue";
import GMap from "../components/memories/GMap.vue";
export default {
  components: {
    DestinationOverview,
    PlanningTool,
    TopAttractions,
    GMap,
  },
  data() {
    return {
      countryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.country(this.countryId);
    },
  },
  // setup() {
  //     const markers = [
  //     { lat: 38.8977859, lng: -77.0057621, title: "<strong>Union Station</strong>" },
  //     { lat: 38.8976763, lng: -77.0365298, title: "<strong>White House</strong>" }

  //   ]
  //   return {markers}
  // }
  //   watch: {
  //     '$route'(currentRoute) {
  //         this.memoryId = currentRoute.params.id;
  //     }
  //   }
};
</script>
