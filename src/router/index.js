import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/views/wd/zhuce'
import home from '@/views/wd/home'
import Htop from '@/components/Htop'
import Denglu from '@/views/mhy/denglu.vue'
import Shouye from '@/views/mhy/shouye.vue'
import Zhucu from '@/views/wsz/zhucu.vue'
import hzyq from '@/views/wsz/hzyq.vue'
import fabuxuqiu1 from '@/views/wsz/fabuxuqiu1.vue'
import toubu from '@/components/toubu.vue'
import toubu1 from '@/components/toubu1.vue'
import dibu from '@/components/dibu.vue'

import xuqiuliebiao from '@/views/wsz/xuqiuliebiao.vue'
import xiangxiliebiao from '@/views/wsz/xiangxiliebiao.vue'
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
        },
        {
            path: '/zhucu',
            name: 'Zhucu',
            component: Zhucu
        },
        {
            path: '/hzyq',
            name: 'hzyq',
            component: hzyq
        },
        {
            path: '/fabuxuqiu1',
            name: 'fabuxuqiu1',
            component: fabuxuqiu1
        },

        {
            path: '/toubu',
            name: 'toubu',
            component: toubu
        },
        {
            path: '/toubu1',
            name: 'toubu1',
            component: toubu1
        },
         {
             path: '/dibu',
             name: 'dibu',
             component: dibu
         },
         {
            path: '/xiangxiliebiao',
            name: 'xiangxiliebiao',
            component: xiangxiliebiao
        },

         {
            //  path: '/xuqiuliebiao/:id',
             path: '/xuqiuliebiao',
            name: 'xuqiuliebiao',
            component: xuqiuliebiao
        },
    ]
})