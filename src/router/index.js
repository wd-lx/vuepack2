import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/views/wd/zhuce'
import xieyi from '@/views/wd/xieyi'
import home from '@/views/wd/home'
Vue.use(Router)

const router = new Router({
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
            path: '/xieyi',
            name: 'xieyi',
            component: xieyi
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
    ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行
    //     next()  放行    next('/zhuce')  强制跳转

    if (to.path === '/zhuce') return next()
        // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/zhuce')
    next()
})
export default router