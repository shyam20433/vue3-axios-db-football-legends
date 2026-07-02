import { createRouter, createWebHistory } from 'vue-router'
import { usePlayerStore } from '@/stores/playerStore'

import HomeView from '../views/HomeView.vue'
import NeymarView from '../views/NeymarView.vue'
import MessiView from '../views/MessiView.vue'
import RonaldoView from '../views/RonaldoView.vue'
import ChhetriView from '../views/ChhetriView.vue'
import ProvideInjectView from '@/views/ProvideInjectView.vue'
import FavouriteView from '@/views/FavouriteView.vue'
import form from '@/views/formView.vue'


//api
import FootballApiView from "@/views/FootballApiView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/neymar',
      component: NeymarView
    },
    {
      path: '/messi',
      component: MessiView
    },
    {
      path: '/ronaldo',
      component: RonaldoView
    },
    {
      path: '/chhetri',
      component: ChhetriView
    },
    {
      path: '/provide',
      component: ProvideInjectView
    },
    {
      path: '/favorites',
      component: FavouriteView
    },
    {
      path: "/football-api",
      component: FootballApiView
    },
    {
      path:"/form",
      component:form
    }

  ]
})
router.beforeEach((to) => {

  const store = usePlayerStore()

  if (to.path === "/favorites" && store.favorites.length === 0) {

    alert("Please add a favorite player first!")

    return { path: "/" }
  }

})

export default router
