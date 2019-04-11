import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home'
import Choice from  './components/choice'

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
        }
    ]
})
