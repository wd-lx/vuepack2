import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/views/wd/zhuce'
import yunduangongzuo from '@/views/wd/yunduangongzuo'
import fabuxuqiu2 from '@/views/wd/fabuxuqiu2'
import xiangqing from '@/views/wd/xiangqing'
import gerenxinxi from '@/views/wd/gerenxinxi'
import Htop from '@/components/Htop'
import Denglu from '@/views/mhy/denglu.vue'
import Shouye from '@/views/mhy/shouye.vue'
import Zhucu from '@/views/wsz/zhucu.vue'
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
    ]
})