import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/views/wd/zhuce'
import home from '@/views/wd/home'
import Htop from '@/components/Htop'
import Denglu from '@/views/mhy/denglu.vue'
import Shouye from '@/views/mhy/shouye.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/zhuce',
            name: 'zhuce',
            component: zhuce
        },

        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/Htop',
            name: 'Htop',
            component: Htop
        },
        {
            path: "/denglu",
            name: "Denglu",
            component: Denglu
        },
        {
            path: "/shouye",
            name: "Shouye",
            component: Shouye
        }
    ]
})