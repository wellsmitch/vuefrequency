<template>
  <div class="hello" id="refreshContainer">
    <button type="button" data-loading-icon="mui-spinner mui-spinner-custom" class="mui-btn mui-btn-primary">确认</button>
    <div id="demo1" class="mui-progressbar">
      <span></span>
    </div>
    <action_bar levelId="2"></action_bar>
    <router-link to="/home">跳转到home51</router-link>
    <router-link to="/baidu">跳转到百度地图</router-link>
    <router-link to="/gaode">跳转到高德</router-link>
    <router-link to="/xuanxiangka">选项卡</router-link>
    <router-link to="/storetest">跳转到vuex</router-link>
    <Icon type="folder-open" size='30'></Icon>

    <Icon type="briefcase"></Icon>
    <h1 class="rr">{{ msg }}</h1>
    <h1>vw测试块元素</h1>
    <canvas width="100" height="100"></canvas>
    <div class="overflow">
      <div class="fl" style="width: 150px;">1111</div>
      <div class="fl" style="width: 150px">22222</div>
      <div class="fl" style="width: 150px">33333</div>
      <div class="fl" style="width: 150px">444444</div>
      <div class="fl" style="width: 150px">555555</div>
    </div>
    <Icon type="load-a" size="50" class="spin"></Icon>
    <h2>Essential Links g b v 66r236</h2>
    <div slot="xx">dsgg</div>
    <div style="border: 1px #f41856 solid;display: flex">
      <div style="background: aliceblue;flex: 1;border: 1px #000;">123</div>
      <div style="background: darkblue;flex: 1">123</div>
      <div style="background: gold;flex: 1">123</div>
    </div>
    <slot style="color:blue;">这是在slot上添加了样式</slot>
    <slot name="xx">
      <div>我是个插槽</div>
    </slot>
    <div>{{bb}}</div>
    <button @click="dial()" class="btn">打电话</button>
    <use2></use2>
    <button @click="tap_jump()">跨域请求</button>
    <button @click="editarr()">改变数组数据</button>
    <h1>数组改变视图未更新</h1>
    <div v-for="item in arr">{{item}}</div>
    <div>
      <h2>选项卡</h2>
      <button class="ss" v-for="(item, index) in se" @click="sel(index)">{{item}}</button>
      <div v-for="(item, index1) in secon" v-if="seshow == index1">{{item}}</div>
    </div>
    <div>

      <div class="demo">
                    <img src="33.jpeg" width="250" height="188">
                    <div style="position: relative;">
                        <div id="svgcontainer"></div>
                        <div style="position: absolute;top: 0;left: 0;">
                            <svg id="ctr" width='500' height='500'>
                                <!--<polyline points='220,10 300,210 170,250 123,234' fill='none' stroke='#000' stroke-width='10'></polyline>-->
                                <polyline id="moreLine" points="" fill='none' stroke='#1269d3' stroke-width='5'></polyline>
                                <polygon id="box" points='' fill='#607d8b' stroke='#000' stroke-width='5'></polygon>
                            </svg>
                        </div>
                    </div>

                    <!--<img src="33.jpeg" width="160" height="160">-->
                    <!--<span id="iconsvg"></span>-->
                </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import  '../js/imagetracer_v1.2.1.js'

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      bb: "",
      arr:[111,222],
      se:[1,2,3],
      secon: [11, 22, 33],
      seshow:0
    };
  },
  methods: {
    sel(a) {
      this.seshow = a
    },
    dial(){
      try {
        alert(21423423);
        document.addEventListener('plusready', ()=>{
          alert(21423423);
          plus.device.dial( '123456', true );
        })

      }catch(e){
        alert(e)
      }

    },
    tap_jump() {
      // var URL = this.HOST +'/users/login'
      // var URL = "http://localhost:3000/users/login";
      var URL = this.HOST;
      //var URL = 'http://jx.xuzhixiang.top/ap/api/login.php'
      console.log(URL);
      // axios
      //   .post(URL, {
      //     name: "songyubin",
      //     pw: 123456
      //   })
      //   .then(function(data) {
      //     console.log(data, 123456);
      //   });

      $.ajax({
        type: "GET",
        url: 'https://api.readhub.cn/topic',
        data: {
          lastCursor:'',
          pageSize:20
          // topicId:'7KAdwj2cOOQ'
        },
        success: function(data) {
          console.log(data,6666666);
        }
      });
    },
    editarr(){
      /* this.$set(this.arr,0,333);  强制类型转化*/
      // this.arr[0] = 333;
      this.$set(this.arr,0,333);
      this.arr.push(999)
      console.log(this.arr);

    }
  },
  mounted() {
    this.mui("#demo1").progressbar({progress:20}).show();
    axios.get('http://172.16.10.35:8080/api/getJson',{}).then(function (data) {
      console.log(data)
    });
    function sleep(second, param) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("---1");
          resolve(param);
        }, second);
      });
    }
    function aaa(i) {
      return axios
        .get("http://jx.xuzhixiang.top/ap/api/productlist.php", {})
        .then(function(data) {
          console.log(i, "---aaa");
          return 5555;
        });
    }
    function ccc(e) {
      axios
        .get("http://jx.xuzhixiang.top/ap/api/productlist.php", {})
        .then(function(data) {
          console.log(e, "---bbb");
        });
    }
    async function test() {
      let result1 = await sleep(2000, "req01");
      let result2 = await aaa(result1);
      let result3 = await ccc(result2);
    }

    test();
// function asv(){
        ImageTracer.imageToSVG(
            '33.jpeg',
            function(svgstr){ ImageTracer.appendSVGString( svgstr, 'svgcontainer' ); },
            {numberofcolors: 256, scale:.8},
            'Curvy'
        );
    // }
    function asv() {
       return  $.ajax({
                    type:'get',
                    url:'http://localhost:63342/favicon.ico',
                    success:function(data){
                        return 22222
                    }
                })
    }

    function ff() {
        document.querySelector('#ctr').setAttribute('width',512);
        document.querySelector('#ctr').setAttribute('height',480);

        var pointsString = [];
        function move(e){
            var s = e.offsetX+'#'+e.offsetY;
            pointsString.push(s);
        }
        ctr.onmousedown = function (e) {
            console.log(e.button,662255);
            var p = '';
            if(e.button == 0){
                move(e);
                var str = pointsString.join(' ');
                p = str.replace(/#/g,',');
                window.strr = p;
                console.log(window.strr,778899);
                moreLine.setAttribute("points",p);
            }
            if(e.button == 2){
                console.log(window.strr,333333);
                box.setAttribute("points",window.strr);
                box.onmouseenter = function () {
                    alert('划入了')
                };
                box.onmouseleave = function () {
                    alert('划chu了')
                };
            }

        };
    }
    async function test1() {
        let result1 = await asv();
        let result2 = await ff(result1);
    }

    test1();



  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "~ASSETS/a.scss";
@import "~ASSETS/mui.scss";


.fl {
  float: left;
}
.fr {
  float: right;
}
.overflow {
  overflow: hidden;
}
#box{
  /* width: 5.76rem; */
  /* width: 5.76rem;
  height: 5.4rem; */
  width: 640px;
  height: 600px;
  border: 1px sandybrown solid;
  background: url('~STATIC/33.jpeg') 0 0 /contain;
}
#box1{
  width: 640px;
  height: 600px;
  border: 1px sandybrown solid;
  position: absolute;
  top:0px;
  left:0;
  background: transparent;
}
#cvs{
  /* width: 5.76rem;
  height: 5.4rem; */
  /* width: 640px;
  height: 600px; */
  width: 100%;
  height: 100%;
  position: absolute;
  top:0px;
  left:0;
  background: transparent;
  border: 1px sandybrown solid;
}

.rr{
  height: 50px;
border:.5px #b17745 solid;
}


h1,
h2 {
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
  body{
    margin: 0;
  }

</style>
