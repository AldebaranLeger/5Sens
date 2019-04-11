<template>

        <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" />
        <mgl-map><MglNavigationControl position="top-right"/>
                <MglGeolocateControl position="top-right" />
        </mgl-map>

</template>

<script>

        import Mapbox from "mapbox-gl";
        import { MglMap, MglNavigationControl, MglGeolocateControl } from "vue-mapbox";


        export default {
                components: {
                        MglMap,
                        MglNavigationControl,
                        MglGeolocateControl
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
        margin:0;
        padding:0;
    }

</style>
