import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Denglu from '@/views/mhy/denglu.vue'
import Shouye from '@/views/mhy/shouye.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/denglu",
      name:"Denglu",
      component:Denglu
    },
    {
      path:"/shouye",
      name:"Shouye",
      component:Shouye
    }
  ]
})
