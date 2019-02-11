<template>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "kuayu",
      mounted(){
          var url = this.HOST + '/users/svgpost'
        console.log(url)
          axios.post(url,{}).then(function (data) {
            console.log(data)
          })

       }
    }
</script>

<style scoped>

</style>
