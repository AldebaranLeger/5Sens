<template>
    <div class="slider" ref="slider">
        <div class="slide_container">
            <img src="../assets/images/sensathon%20=%20ui%202-01.png">
            <img src="../assets/images/sensathon%20=%20ui%202-02.png">
            <img src="../assets/images/sensathon%20=%20ui%202-03.png">
            <img src="../assets/images/sensathon%20=%20ui%202-04.png">
            <img src="../assets/images/sensathon%20=%20ui%202-05.png">
            <img src="../assets/images/sensathon%20=%20ui%202-06.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "avatar"
    }

</script>

<style scoped lang="scss">
    .slider {
        width: 100vw;
        .slide_container {
            display: grid;
            grid-auto-columns: min-content;
            img {

            }
        }
    }
</style>