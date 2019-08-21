<template>
    <div>
      <h1>选项卡</h1>
        <button v-for="(item, index) in s" :class="select == index ? 'activecolor' : ''" @click="tap(index)">{{ item }}</button>
      <div v-for="(ite, index1) in con" v-if="select == index1">{{ ite }}</div>
    </div>
</template>

<script>
    export default {
        name: "xuanxiangka",
      data() {
          return {
            s: ['选项1','选项2', '选项3'],
            con: ['内容1','内容2', '内容3'],
            select: 0,
          }
      },
      methods: {
          tap (a) {
            this.select = a;
          }
      }
    }
</script>

<style scoped>
  .activecolor {
    color: red;
  }
</style>
