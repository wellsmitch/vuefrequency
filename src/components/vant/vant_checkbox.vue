<template>
    <div>
      <van-checkbox v-model="checked">
        自定义图标
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.inactive"
        >
      </van-checkbox>

      <van-checkbox-group v-model="result">
        <van-checkbox
          v-for="(item, index) in list"
          :key="item"
          :name="item"
        >
          复选框 {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: "vant_checkbox",
      data() {
        return {
          checked: true,
          icon: {
            active: 'https://img.yzcdn.cn/vant/user-active.png',
            inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
          },
          list: ['a', 'b', 'c'],
          result: ['a', 'b']
        }
      }
    }
</script>

<style scoped>

</style>
