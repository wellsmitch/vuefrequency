<template>
    <div class="header-actionbar">
      <p>9876543210---{{levelName}}</p>
    </div>
</template>

<script>
    export default {
        name: "header-actionbar",
        props:{
          levelId: {
            type: Number,
            default: 1  //当前关卡值取值  可以通过计算属性进行变量转为数据的实现
          },
          isLeve1Test: {
            type: Boolean, // 默认不显示，只在第一关测试中显示    特定定地方才能显示
            default: false
          }
        },
        computed:{
          levelName(){
            return this.levelId == 1 ? '第一关 &nbsp;&nbsp;单词学习' : this.levelId == 2 ? '第二关 &nbsp;&nbsp;单词学习' : this.levelId == 3 ? '第三关 &nbsp;&nbsp;单词学习' : this.levelId == 4 ? '课前检测' : '单词卡制作'
          }
        }

    }
</script>

<style scoped>

</style>
