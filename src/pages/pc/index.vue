<template>
  <!-- eslint-disable max-len -->
  <div id="page_home">
    <div>
      <el-button
        v-for="(val,index) in typeList"
        :key="index"
        @click="getType(val.name)"
      >{{ val.name }}</el-button>
    </div>
    <div>
      <el-button
        v-for="(v,index) in statusList"
        :key="index"
        @click="getStatus(v.name)"
      >{{ v.name }}</el-button>
    </div>
    <span
      v-for="item in data"
      :key="item.id"
    >
      <img
        v-if="item.if"
        :src="item.url"
        alt=""
      >
    </span>
  </div>
</template>

<script>
import data from '@/api/data';

const typeList = [{ name: '全部' }, { name: 'dota2' }, { name: 'img' }];
const statusList = [{ name: '全部' }, { name: 'head' }, { name: 'back' }];

export default {
  name: 'PC',

  data() {
    return { data, typeList, statusList, imgList: [], clickType: '全部', clickStatus: '全部' };
  },
  methods: {
    getType(val) {
      this.clickType = val;
      this.getList();
    },
    getStatus(val) {
      this.clickStatus = val;
      this.getList();
    },
    getList() {
      this.data = this.data.map((res) => {
        const list = res;
        if (this.clickType === '全部') {
          list.if = true;
        } else if (this.clickType !== '全部' && res.type === this.clickType) {
          list.if = true;
        } else {
          list.if = false;
          return list;
        }
        if (this.clickStatus === '全部') {
          list.if = true;
        } else if (this.clickStatus !== '全部' && res.status === this.clickStatus) {
          list.if = true;
        } else {
          list.if = false;
          return list;
        }
        return list;
      });
    },
  },
};
</script>
<style>
html,
body,
#home {
  height: 100%;
}
</style>
