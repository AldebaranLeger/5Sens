import Vue from 'vue';
import '@babel/polyfill';
import App from "./components/app";
import VueRouter from "vue-router";
import router from './router'

Vue.use(VueRouter);

new Vue({
    render: createElement => createElement(App),
    router,
}).$mount(document.getElementById("app"));
