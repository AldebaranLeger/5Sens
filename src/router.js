import VueRouter from 'vue-router'
import Home from './components/home'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ]
})
