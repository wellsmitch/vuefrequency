<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition :name="transitionName">
      <router-view class="transitionAction"/>
    </transition>
  </div>
</template>

<script>
  import Router from 'vue-router'

export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  methods:{
	 //添加hbuilder相关
    plus_ready(){
      var _this = this;
      document.addEventListener('plusready', ()=>{
        plus.key.addEventListener('backbutton', ()=>{
          let webview = plus.webview.currentWebview();
          let webview_list = plus.webview.all();
          console.log(webview,webview_list,123456)
          if (webview_list.indexOf(webview) == webview_list.length-1){
            webview.canBack((e)=>{
              if(e.canBack) {
                _this.transitionName = 'slide-left';
                webview.back();
              } else {
                plus.nativeUI.confirm('确认退出？', (event)=>{
                  if (0 == event.index) {
                    plus.runtime.quit();
                  }
                }, '提示', ["确定", "取消"]);
              }
            })
          }else {
            webview_list[webview_list.length-1].canBack((e)=>{
              if(e.canBack) {
                _this.transitionName = 'slide-left';
                webview_list[webview_list.length-1].back();
              } else {
                webview_list[webview_list.length-1].close();
              }
            })
          }
        });
      });
    }

  },
  mounted(){
	  this.plus_ready()
  },
  watch:{
    //暂时发现路由的监听只在全局生效  组件内不生效
    '$route'(to,from){
      // console.log(to,from);
      //可以再次进行监听上一个组件是哪个   必要的需求时可以使用这个方法

      let isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = 'slide-right';
      } else{
        this.transitionName = 'slide-left';
      }
        this.$router.isBack = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.transitionAction {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
}
.slide-right-enter,.slide-left-leave-active{
  /*opacity: 0;*/
  -webkit-transform: translate(-100vw, 0);
  transform: translate(-100vw, 0);
}

.slide-left-enter,.slide-right-leave-active{
  -webkit-transform: translate(100vw, 0);
  transform: translate(100vw, 0);
}
</style>
