/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import single_product from './views/single_product.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product/:slug',
      name: 'product',
      component: single_product,
    },
  ],
});
