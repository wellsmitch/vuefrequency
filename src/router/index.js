import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gaode from '@/components/gaode'
import gaode_ from '@/components/gaode_'
import baidu from '@/components/baidu'
import svfff from '@/components/svfff'
import storetest from '@/components/storetest'
import kuayu from '@/components/kuayu'
import xuanxiangka from '@/components/xuanxiangka'


Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1)
};

Vue.use(Router);
/*
* {
      path: '/goodslist',
      name: 'goodslist',
      component: (resolve) => require(['@/view/goods/goodslist'], resolve)
    },*/

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: (resolve)=> require(['@/components/home'], resolve)
    },
    {
      path: '/vant_button',
      name: 'vant_button',
      component: (resolve)=> require(['@/components/vant/vant_button'], resolve)
    },
    {
      path: '/vant_icon',
      name: 'vant_icon',
      component: (resolve)=> require(['@/components/vant/vant_icon'], resolve)
    },
    {
      path: '/vant_cell',
      name: 'vant_cell',
      component: (resolve)=> require(['@/components/vant/vant_cell'], resolve)
    },{
      path: '/vant_popup',
      name: 'vant_popup',
      component: (resolve)=> require(['@/components/vant/vant_popup'], resolve)
    },{
      path: '/vant_checkbox',
      name: 'vant_checkbox',
      component: (resolve)=> require(['@/components/vant/vant_checkbox'], resolve)
    },{
      path: '/vant_addressEdit',
      name: 'vant_addressEdit',
      component: (resolve)=> require(['@/components/vant/vant_addressEdit'], resolve)
    },
    // {
    //   path: '/gaode',
    //   name: 'gaode',
    //   component: gaode
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/storetest',
      name: 'storetest',
      component: storetest
    },
    {
      path: '/kuayu',
      name: 'kuayu',
      component: kuayu
    },
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
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/xuanxiangka',
      name: 'xuanxiangka',
      component: xuanxiangka
    }
  ]
})
