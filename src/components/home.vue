<template>
  <div class="home">
    <div @click="back">返回</div>
    <router-link to="/gaode">高德地图</router-link>
    <div class="line"></div>
    <button @click="tap">按钮</button>
    <div id="out" style="width: 200px;height: 200px;border: 1px solid blue;">
      fwaefw
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  var echarts = require('echarts');

  export default {
    name: "home",
    methods:{
      back(){
        this.$router.goBack()
      },
      tap(){
        plus.gallery.pick(

          function (paths){
            console.log('home:',paths,1111);
            for(let i in paths.files){
              console.log('home:',2222);

              console.log(paths.files[i]);

              $('#out').html("<img style='width:100%;height:100%' src="+paths.files[i]+" />");
              console.log('home:',3333);
            }

          },
          function (e){console.log('失败',e)},
          {multiple:true,maximum:5}
        )
      }
    },
    mounted() {
       console.log(this.$router)
      var line = echarts.init(document.querySelector('.line'));
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        grid:{
          show:true,
          top:0,
          bottom:'5%',
          left:0,
          right:0,
          containLabel: true,
          tooltip:{
            show:true,
            trigger:'axis',
            borderColor:'red'
          }

        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      line.setOption(option)
      // console.log(document.querySelector('.line'))
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .line {
      width: 300px;
      height: 300px;
    }
  }

</style>
