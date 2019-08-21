// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//所有需要调用的组件 与 函数必须在加载之前进行引入  否则不会生效
import Vue from 'vue'
import App from './App'
import router from './router'

import mui from './js/mui.js'
// import './js/imagetracer_v1.2.1.js'

import './utils/vueCps'//公共组件需在此引入
import store from './store'
import uses from './components/use'

import VueCropper from 'vue-cropper'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
//使用use 的方法注册的全局组件
const use1 = {
  install: function (Vue) {
    Vue.component('use2', uses)
  }
} ;

import { Button, Cell, CellGroup, Icon, Popup, Checkbox, CheckboxGroup, AddressEdit } from 'vant';
import 'vant/lib/index.css';


function vueUse(useModalArr) {
  useModalArr.forEach(function (ele) {
    Vue.use(ele)
  })
}
var useModalArr = [
  use1, iview, VueCropper, Button, Cell, CellGroup, Icon, Popup, Checkbox, CheckboxGroup, AddressEdit
];
vueUse(useModalArr);


Vue.prototype.HOST = '/api';
Vue.prototype.HOST1111 = 'HOST1111';
Vue.prototype.mui = mui;


new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    console.log(this.mui);
  },
  components: { App },
  template: '<App/>'
});
