// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//所有需要调用的组件 与 函数必须在加载之前进行引入  否则不会生效
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/vueCps'//公共组件需在此引入

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
