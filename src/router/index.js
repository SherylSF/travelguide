import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from "../pages/MemoriesPage.vue"
import HomePage from "../pages/HomePage.vue"

const routes= [
  {
    path: '/',
    redirect: '/homepage'
  },
  { path: '/homepage',
    component: HomePage
  },
  { path: '/memories',
    component: MemoriesPage
  },
  { path: '/memories/:id',
    component: () => import('../pages/MemoryDetails.vue')
  },
  { path: '/memories/add',
    component: () => import('../pages/AddMemoryPage.vue')
  },
  { path: '/destinations/:id',
    component: () => import('../pages/DestinationPage.vue')
  },
  { path: '/countries/:id',
  component: () => import('../pages/CountryPage.vue')
},
{ path: '/countries/todo/:id',
component: () => import('../pages/TodoPage.vue')
},
{ path: '/countries/toknow/:id',
component: () => import('../pages/ToknowPage.vue')
},
{ path: '/countries/tovisit/:id',
component: () => import('../pages/TovisitPage.vue')
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
