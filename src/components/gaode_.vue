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
<!--map-->
    <div id="js-container" class="map">正在加载数据 ...</div>
    <!--radio-->
    <input type="radio" v-model="pick" :value="value1">
    <!--单选框需要绑定一个数据时-->
    <p>{{pick}}</p>
    <p>{{value1}}</p>
    <!--checkbox-->
    <input type="checkbox" v-model="toggle" :true-value="a_" :false-value="aa_">
    <p>{{toggle}}</p>
    <p>{{a_}}</p>
    <p>{{aa_}}</p>
    <!--select  option-->
    <select v-model="selected" id="">
      <option :value="{number:123}">132456</option>
    </select>
    <p>{{selected.number}}</p>
    <!--  .lazy  按回车或者失去焦点-->
    <input type="text" v-model.lazy="msg">
    <p class="lp">{{msg}}</p>
    <!--  .number  可以将输入转换为Number类型  只能输入数字 不能输入其他的文本-->
    <input type="text" v-model.number="msg_1">
    <p>{{typeof msg_1}}</p>
    <!--  .trim  可以滤掉收尾空格  再输出msg_2  -->
    <input type="text" v-model.trim="msg_2">
    <p>{{msg_2}}</p>
    <p style="font-size: 20px">huihoiswefaewfaewfw</p>
  </div>
</template>

<script>
import remoteLoad from '../utils/remoteLoad.js'
import { MapKey, MapCityName } from '../../config/config'
export default {
  name:'gaode_',
  props: ['lat', 'lng'],
  data () {
    return {
      msg_2:'',
      msg_1:'',
      msg:'',
      selected:'',
      pick:'',
      value1:'123',
      toggle:false,
      a_:'111',
      aa_:'222',
      searchKey: '',
      placeSearch: null,
      dragStatus: false,
      AMapUI: null,
      AMap: null
    }
  },

  methods: {

    // 实例化地图
    drag_(){
      console.log(window.AMapUI);
      let AMapUI = this.AMapUI = window.AMapUI;
      let AMap = this.AMap = window.AMap;
      AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
        var map = new AMap.Map('js-container', {
          zoom: 16,
          scrollWheel: true
        })
        var positionPicker = new PositionPicker({
          mode: 'dragMap',
          map: map
        });
        positionPicker.on('success', function(positionResult) {
          console.log(positionResult.position);
          // document.getElementById('lnglat').innerHTML = positionResult.position;
        });
        positionPicker.start();
      });
    }
  },
  mounted () {
      this.drag_()
  }

}
</script>

<style lang="scss">
  #js-container{height: 500px}
.m-map{ min-width: 500px; min-height: 300px; position: relative; }
.m-map .map{ width: 100%; height: 100%; }
.m-map .search{ position: absolute; top: 10px; left: 10px; width: 285px; z-index: 1; }
.m-map .search input{ width: 180px; border: 1px solid #ccc; line-height: 20px; padding: 5px; outline: none; }
.m-map .search button{ line-height: 26px; background: #fff; border: 1px solid #ccc; width: 50px; text-align: center; }
.m-map .result{ max-height: 300px; overflow: auto; margin-top: 10px; }
  .lp{
    font-size: 20px;
  }

</style>
