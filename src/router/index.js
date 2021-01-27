import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: () => import('../layouts/main/Main.vue'),
    children: [
      {
        path: '/',
        redirect: '/search',
      },
      {
        path: '/search',
        name: 'searchIPL',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/results',
        name: 'Filtered',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Filtered.vue'),
      },
    ],
  },
  
];

const router = new VueRouter({
  mode: '',
  base: process.env.BASE_URL,
  routes,
});

export default router;
