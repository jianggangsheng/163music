import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/home/index.vue'
import Index from './view/Index.vue'

import NavbarHeader from './components/NavbarHeader.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      component: Index,
      children:[
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
          path: '/rank',
          name: 'rank',
          component: () => import('./view/rank/rank.vue')
        },
    ]
    },
   
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./view/rank/detail.vue')
    },
    {
      path: '/player',
      name: 'player',
      component: () => import('./view/player/player.vue')
    },
  ]
})
