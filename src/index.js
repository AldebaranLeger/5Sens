import Vue from 'vue';
import '@babel/polyfill';
import App from "./components/app.vue";
import VueRouter from "vue-router";
import router from './router';

Vue.use(VueRouter);

new Vue({
    router,
    render: createElement => createElement(App)
}).$mount('#app');
