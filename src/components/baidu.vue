<!--
  描述：拖放地图组件，默认尺寸是 500 * 300

  接收属性参数：
    lat: 纬度
    lng: 经度

  自定义事件：
    drag: 拖放完成事件

  示例：
    <mapDrag @drag="dragMap" lat="22.574405" lng="114.095388"></mapDrag>
-->
<template>
  <div class="m-map">
    <action_bar :levelId="3"></action_bar>
    <div id="js-container" class="map">正在加载数据 ...</div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        AMap: null,
        BMap: null
      }
    },
    methods: {
      // 实例化地图
      drag_(){
        var map = new BMap.Map("js-container",{enableMapClick:true});
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(116.4035,39.915), 11);
      }

    },
   mounted () {

        this.drag_()

    }

  }
</script>

<style lang="css">

  #js-container{height: 500px}
  .m-map{ min-width: 500px; min-height: 300px; position: relative; }
  .m-map .map{ width: 100%; height: 100%; }
  .m-map .search{ position: absolute; top: 10px; left: 10px; width: 285px; z-index: 1; }
  .m-map .search input{ width: 180px; border: 1px solid #ccc; line-height: 20px; padding: 5px; outline: none; }
  .m-map .search button{ line-height: 26px; background: #fff; border: 1px solid #ccc; width: 50px; text-align: center; }
  .m-map .result{ max-height: 300px; overflow: auto; margin-top: 10px; }
</style>
