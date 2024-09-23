import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../View/HomeVeiw.vue';
import ProductPages from '../pages/ProductPages.vue';
import Product from '../components/Product.vue';
import ProductListing from '../components/ProductListing.vue';
import ProductInput from '../components/ProductInput.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/product', component: Product }, 
  { path: '/ProductListing', component: ProductListing },
  { path: '/productInput', component: ProductInput },
  { path: '/ProductPages', component: ProductPages }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
