import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import gaode from '@/components/gaode'
import gaode_ from '@/components/gaode_'
import baidu from '@/components/baidu'


Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1)
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // {
    //   path: '/gaode',
    //   name: 'gaode',
    //   component: gaode
    // },
    {
      path: '/baidu',
      name: 'baidu',
      component: baidu
    },

    {
      path: '/gaode_',
      name: 'gaode_',
      component: gaode_
    },
    {
      path: '/gaode',
      name: 'gaode',
      component: gaode
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
