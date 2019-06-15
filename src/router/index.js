import Vue from 'vue';
import Router from 'vue-router';

const Container = () => import('../layout/index');

Vue.use(Router);

export const pcRoutes = [
  {
    name: 'pc',
    path: '',
    component: Container,
    meta: { title: '首页', icon: 'home' },
    children: [
      {
        name: 'pcIndex',
        path: '',
        component: () => import('../pages/pc'),
        meta: {
          pc: true,
        },
      },
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/login'),
        meta: {
          mobile: true,
        },
      },
    ],
  },
];
export const mobileRoutes = [
  {
    name: 'mobile',
    path: '',
    component: Container,
    meta: { title: '首页', icon: 'home' },
    children: [
      {
        name: 'mobileIndex',
        path: '',
        component: () => import('../pages/mobile'),
        meta: {
          mobile: true,
        },
      },
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/login'),
        meta: {
          mobile: true,
        },
      },
    ],
  },
];

export const routes =
  document.documentElement.clientWidth > 1200 ? [...pcRoutes] : [...mobileRoutes];

const router = new Router({ routes });

export default router;
