import Vue from 'vue'
import Router from 'vue-router'
import Menu2 from '@/components/menu-2'
import Menu1 from '@/components/menu-1'
import Menu3 from '@/components/menu-3'
import Menu4 from '@/components/menu-4'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Menu1
    },
    {
      path: '/menu2',
      component: Menu2
    },
    {
      path: '/menu3',
      component: Menu3
    },
    {
      path: '/menu4',
      component: Menu4
    }
  ]
})
