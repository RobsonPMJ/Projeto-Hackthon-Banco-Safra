import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
<<<<<<< HEAD
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/teste',
    name: 'Teste',
    component: () => import(/* webpackChunkName: "about" */ '../views/Teste.vue'),
  },
=======
>>>>>>> eeacc4e980c3df913bc6adcba51c07e8fc66cdb7
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
