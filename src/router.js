import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from './components/AllProducts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all-products',
      component: AllProducts,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
