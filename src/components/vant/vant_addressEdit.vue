<template>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
</template>

<script>
    export default {
      name: "vant_addressEdit",
      data() {
        return {
          areaList:
            {
              id: '1',
              name: '张三',
              tel: '13000000000',
              address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
            },
          searchResult: []
        }
      },
      methods: {
        onSave() {
          Toast('save');
        },
        onDelete() {
          Toast('delete');
        },
        onChangeDetail(val) {
          if (val) {
            this.searchResult = [{
              name: '黄龙万科中心',
              address: '杭州市西湖区'
            }];
          } else {
            this.searchResult = [];
          }
        }
      }
    }
</script>

<style scoped>

</style>
