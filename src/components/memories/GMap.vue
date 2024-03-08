<template>
  <div class="map" ref="mapDivRef"></div>
</template>

<script>
import {ref, onMounted} from "vue";
// import {IonImg} from '@ionic/vue';

export default {
  name: "GMap",
  props: {
    center: {lat: Number, lng: Number},
    zoom: Number,
    mapType: String,
    disableUI: Boolean,
    markers: Array,
  },
  setup(props) {
    //the google map object
    const map = ref(null);
    // the map element in the template
    const mapDivRef = ref(null);
    //load in the google script
    onMounted(() => {
      //key is in the env.file
      const key = process.env.VUE_APP_GOOGLEMAPS_KEY;
      //create the script element to load
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    const loadMapMarkers = () => {
      let markers = props.markers || [];
      // if (!props.markers.length) return;

      markers.forEach((markerInfo) => {
        const mapMarker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(
            markerInfo.lat,
            markerInfo.lng
          ),
          map: map.value,
          title: markerInfo.title,
        });

        mapMarker.infoWindow = new window.google.maps.InfoWindow({
          content: markerInfo.title,
        });

        mapMarker.addListener("click", () => {
          if (mapMarker.infoWindow !== null) {
            mapMarker.infoWindow.open(map.value, mapMarker);
          }
        });
      });
    };

    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: props.mapType || "hybrid",
        zoom: props.zoom || 8,
        disableDefaultUI: props.disableUI || false,
        center: props.center || {lat: 38.0, lng: -77.01},
      });
      loadMapMarkers();
    };

    return {
      mapDivRef,
    };
  },
};
</script>

<style lang="css" scoped>
.map {
  width: 100%;
  height: 400px;
  background-color: azure;
}
</style>
