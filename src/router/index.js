import Vue from 'vue'
import Router from 'vue-router'
import seller from '../components/seller/seller';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import login from '../components/login/login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/login',
      meta:{
        title: 'goplastic',
        isLogin: false,
        keepAlive: false //true显示头部
      },
      component: login
    },
    {
      path: '/goods',
      meta:{
        title: 'goplastic',
        isLogin: true,
        keepAlive: true //true显示头部
      },
      component: goods
    },
    {
      path: '/seller',
      meta:{
        title: 'goplastic',
        isLogin: true,
        keepAlive: true //true显示头部
      },
      component: seller
    },
    {
      path: '/ratings',
      meta:{
        title: 'goplastic',
        isLogin: true,
        keepAlive: true //true显示头部
      },
      component: ratings
    }
  ]
})
