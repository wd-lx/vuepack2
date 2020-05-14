import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/views/wd/zhuce'
import yunduangongzuo from '@/views/wd/yunduangongzuo'
import fabuxuqiu2 from '@/views/wd/fabuxuqiu2'
import jianjie from '@/views/wd/jianjie'
import xiangqing from '@/views/wd/xiangqing'
import gerenxinxi from '@/views/wd/gerenxinxi'
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
import Yuanlin from '@/views/mhy/yuanlin.vue'
import Excellent from '@/views/mhy/excellent.vue'
import Renzheng from '@/views/mhy/renzheng.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [{
            path: '/',
            redirect: '/denglu',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/zhuce',
            name: 'zhuce',
            component: zhuce
        },
        {
            path: '/jianjie',
            name: 'jianjie',
            component: jianjie
        },

        {
            path: '/yunduangongzuo',
            name: 'yunduangongzuo',
            component: yunduangongzuo
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
            path: '/fabuxuqiu2',
            name: 'fabuxuqiu2',
            component: fabuxuqiu2
        },
        {
            path: '/xiangqing',
            name: 'xiangqing',
            component: xiangqing
        },
        {
            path: '/gerenxinxi',
            name: 'gerenxinxi',
            component: gerenxinxi
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
        }, {
            path: '/yuanlin',
            name: 'Yuanlin',
            component: Yuanlin
        },
        {
            path: '/excellent',
            name: 'Excellent',
            component: Excellent
        },
        {
            path: '/renzheng',
            name: 'Renzheng',
            component: Renzheng
        },
    ]
})