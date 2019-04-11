<template>
    <MglMap
            :accessToken="accessToken"
            :mapStyle.sync="mapStyle"
            @load="onMapLoaded"
    />
</template>

<script>

    import Mapbox from "mapbox-gl";
    import {MglMap} from "vue-mapbox";

    export default {
        name: "map",
        components: {
            MglMap
        },
        data() {
            return {
                accessToken: "pk.eyJ1Ijoia2FpemUiLCJhIjoiY2ptdnB5cTFnMmN2bzNxcG40azdhZXZuYiJ9.aSLGuoI6UckRciUJj2MqRg", // your access token. Needed if you using Mapbox maps
                mapStyle: "mapbox://styles/kaize/cjuce30n91as21fjxd2oaxeq4" // your map style
            };
        },
        methods: {
            onMapLoaded(e) {
                const map = e.map;
            }
        },
    };

</script>


<style scoped>


</style>
