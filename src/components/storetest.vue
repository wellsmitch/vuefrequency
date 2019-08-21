<template>
    <div>
      <div>{{a}}</div>
      <div>{{bInfo}}</div>
      <div>{{cAlias}}</div>
      <hr/>
      <div>{{this.$store.state.num1}}</div>
      <div>{{userNameEdit+'---userNameEdit'}}</div>
      <div>{{userNameEditaaaaa+'---userNameEditaaaaa'}}</div>
      <button @click="tapAdd()">+++</button>
      <button @click="tapJian()">---</button>
      <hr/>
      <p>我是异步的：{{this.$store.state.numString}}</p>
      <button @click="asynclisten()">异步数据按钮</button>
      <hr>
      <p>{{this.$store.state.chen1}}</p>
      <button @click="chenBtn1()">X</button>
      <div>{{computedfunc}}</div>
    </div>
</template>

<script>
  import {mapActions, mapGetters , mapState,mapMutations } from 'vuex'
    export default {
        name: "storetest",
      data() {
          return {
            'info':'state数据'
          }
      },
      methods:{
        ...mapMutations (['tapAdd1']),
        tapAdd() {
          this.tapAdd1(2)
          // this.$store.commit('tapAdd1',2)
        },
        chenBtn1(){
          this.chen(5)
        },

        tapJian() {
          this.$store.commit('tapJian1', 'a')
        },
        asynclisten(){
          this.$store.dispatch('numStringFun1')
        },
        ...mapActions(['chen']),
      },
      mounted(){
        this.$store.commit('numFixFun','superMan')
        console.log(this.$store.state.numFix)
      },

      //mapState 这样用
      computed:{
          ...mapState({
            a: state => state.a,
            bInfo (state) {
              return state.c + this.info
            },
            cAlias: 'c',
          }),
        ...mapGetters(['userNameEdit']),
        // 把 this.doneCount 映射为 this.$store.getters.doneTodosCount
        ...mapGetters({
          userNameEditaaaaa: 'userNameEdit_'
        }),
        // userNameEdit(){
        //    return this.$store.state.userName
        //  },
        computedfunc() {
            return 'this is a computedfunc data'
        }
      }
    }
</script>

<style scoped>

</style>
