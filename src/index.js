import Vue from 'vue';
import '@babel/polyfill';
import App from "./components/app.vue";
import VueRouter from "vue-router";
import router from './router';
import Mapbox from 'mapbox-gl-vue';
import "./globals.scss";

Vue.use(VueRouter);

new Vue({
    router,
    components: {
        'mapbox': Mapbox
    },
    render: createElement => createElement(App)
}).$mount('#app');
