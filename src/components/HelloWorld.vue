<template>
  <div class="hello">
    <router-link to="/home">跳转到home51</router-link>
    <h1 class="rr">{{ msg }}</h1>
    <h2>Essential Links g b v 66r236</h2>
    <div slot="xx">dsgg</div>
    <slot style='color:blue;'>这是在slot上添加了样式</slot>
    <slot name="xx">
      <div>我是个插槽</div></slot>
    <div>{{bb}}</div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bb:''
    }
  },
      mounted(){

        function sleep(second, param) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log('---1')
              resolve(param);

            }, second);
          })
        }
        function aaa(i){
          return 	axios.get('http://jx.xuzhixiang.top/ap/api/productlist.php',{})
            .then(function(data){

              console.log(i,'---aaa')
              return 5555
            })
        }
        function ccc(e){
          axios.get('http://jx.xuzhixiang.top/ap/api/productlist.php',{})
            .then(function(data){
              console.log(e,'---bbb')
            })
        }
        async function test() {
          let result1 = await sleep(2000, 'req01');
          let result2 = await aaa(result1);
          let result3 = await ccc(result2);
        }

        test();







    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "~ASSETS/a.scss";

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
