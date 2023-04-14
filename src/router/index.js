import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SharedLayout from '../SharedLayout/SharedLayout.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import RouterFile from '../components/practice/RouterFile.vue'
import NewFile from '../views/NewFile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      // alias: '/home',
      children: [
        {
          path: 'newfile',
          name: 'newfile',
          component: NewFile
        },
        {
          path: ':id',
          name: 'card',
          component: HelloWorld
        },
        {
          // динамические параметры
          path: 'newfile/:filename/fileid/:id',
          name: 'routerfile',
          component: RouterFile,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
