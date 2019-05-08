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
        {
          path: '/singer',
          name: 'singer',
          component: () => import('./view/singer/singer.vue')
        },
    ]
    },
   
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./view/rank/detail.vue')
    },
    {
      path: '/singerDetail/:id',
      name: 'singerDetail',
      component: () => import('./view/singer/detail.vue')
    },
    {
      path: '/player/:id',
      name: 'player',
      component: () => import('./view/player/player.vue')
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import('./view/rank/album.vue')
    },
  ]
})
