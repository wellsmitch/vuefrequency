// vue public components

import Vue from 'vue'

import action_bar from '../components/action_bar.vue'
import elsecomponent from '../components/elsecomponent.vue'


// Vue.component是全局注册组件的方法 缺点：即使不使用也会占用内存  通过叠加注册多个公共组件注意是component
Vue.component('action_bar', action_bar);
Vue.component('action_ttt', elsecomponent);


