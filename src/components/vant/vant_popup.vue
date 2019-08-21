<template>
<div>
  <van-button type="primary" @click="showPopup">
    展示弹出层
  </van-button>

  <!--<van-popup v-model="show">内容</van-popup>-->
  <!--弹出位置-->
  <!--通过position属性设置弹出位置，默认居中弹出，可以设置为top、bottom、left、right-->

  <van-popup
    v-model="show"
    position="top"
    :style="{ height: '20%' }"
  >
    <h1>132456</h1>
  </van-popup>
  <!--
  Events
事件名	说明	回调参数
click	点击弹出层时触发	-
open	打开弹出层时触发	-
opened	打开弹出层且动画结束后触发	-
close	关闭弹出层时触发	-
closed	关闭弹出层且动画结束后触发	-
click-overlay	点击遮罩层时触发-->
</div>
</template>

<script>
    export default {
        name: "vant_popup",
      data() {
        return {
          show: false
        }
      },

      methods: {
        showPopup() {
          this.show = true;
        }
      }
    }
</script>

<style scoped>

</style>
