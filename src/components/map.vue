<template>

    <div id="map">
        <mapbox
                :access-token="accessToken"
                :fullscreen-control="{show: true,position: 'top-left'}"
                :geolocate-control="{show: true,position: 'top-left'}"
                :map-options="{style: mapStyle}"
                :scale-control="{show: true,position: 'top-left'}">
        </mapbox>
    </div>

</template>

<script>
    import Mapbox from 'mapbox-gl-vue';


    export default {
        components: {
            Mapbox,
        },
        data() {
            return {
                accessToken: "pk.eyJ1Ijoia2FpemUiLCJhIjoiY2ptdnB5cTFnMmN2bzNxcG40azdhZXZuYiJ9.aSLGuoI6UckRciUJj2MqRg",
                mapStyle: "mapbox://styles/kaize/cjuco34fx3q3q1fnm9oatomzu"
            };
        },


    };

</script>


<style scoped>

    body {
        margin: 0;
        padding: 0;
    }

    #map {
        width: 100%;
        height: 500px;
    }


</style>
