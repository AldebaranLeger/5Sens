<template>
    <main>
        <div class="col-6" style="left: 50%; height: 100vh; background-color: #a1dddf"></div>

        <div id="triangle-right">
            <h2 id="" ><router-link to="/map">ex-situ</router-link></h2>
        </div>
        <div id="triangle-left">
            <h2 id="in-situ">in situ</h2>
        </div>
    </main><!-- /.container -->
</template>

<script>
    export default {
        name: "choice"
    }
</script>

<style scoped>
    #ex-situ {
        margin-top: 100px;
        font-weight: bold;
        color: white
    }
    #in-situ {
         margin-top: -200px;
         font-weight: bold;
         color: #ff3100
     }
    #triangle-left {
        position: absolute;
        top: 50%;
        right: 50%;
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-right: 100px solid #ff3100;
        border-bottom: 50px solid transparent;
    }

    #triangle-right {

        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-left: 100px solid white;
        border-bottom: 50px solid transparent;
    }

</style>
