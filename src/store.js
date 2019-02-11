import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

var state = {
  num1 : 1,
  numFix:'person',
  userName:'小明',
  userName1:'小明aaa',
  numString:'异步数据',
  a:'111',
  b:'222',
  c:'333',
  chen:1
}

var mutations = {
  tapAdd1(a,b){
    a.num1 += b
  },
  numFixFun(a,b){
    a.numFix = b
  },
  tapJian1(a){
    a.num1 --
  },
  numStringFun(a,b){
    a.numString = b + '--异步数据'
  }
}

var getters = {
    //可以直接用this.$store.getters.userNameEdit来接数据
    userNameEdit: state =>{
      return (state.userName + '--处理过的数据')
    },
    userNameEdit_: state =>{
      return (state.userName1 + '--处理过的数据')
    }
};


// actions修改数据可以是异步的
var actions = {
//   // tapAdd:({commit},b1)=>commit('tapAdd1',b1),
//   tapAdd(context){
//     console.log(context,22222222)
//     // context.commit('tapAdd1')
//   },
//   tapJian:({commit},b1)=>commit('tapJian1',b1)

// 配合 mapActions
chen(a,b){
  console.log(a)
  a.state.chen += b
},


//   numStringFun1(a){
//     console.log(a)
//     a.commit('numStringFun','新的')
//   }

    //配合dispatch
    numStringFun1({commit}){
      setTimeout(()=>{
          commit('numStringFun','新的')
      },1000)
    }
}

export default new Vuex.Store({
  getters,
  actions,
  state,
  mutations,
})
