import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from  '../View/HomeVeiw.vue'
import Product from '../components/Product.vue'
import ProductPages from '../pages/ProductPages.vue'
import ProductListing from '../components/ProductListing.vue'

const routes = [
  { path: '/', component: HomeView },
  {path:'/product', component:ProductPages},
  {path:'/ProductListing',component:ProductListing}

 
]

 


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export  default router