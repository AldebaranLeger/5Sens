import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home';
import Choice from  './components/choice';
import Map from  './components/map';
import Avatar from  './components/avatar';


Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path : '/choice',
            name: 'choice',
            component: Choice,
        },
        {
            path : '/map',
            name: 'map',
            component: Map,
        },
        {
            path : '/avatar',
            name: 'avatar',
            component: Avatar,

        }
    ]
})
