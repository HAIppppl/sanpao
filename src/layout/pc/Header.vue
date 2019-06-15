<template>
  <el-header
    id="app-sidebar"
    width="200px"
  >
    <el-menu
      :default-active="$route.path"
      :collapse-transition="false"
      class="menu custom-scroll-bar"
      mode="horizontal"
    >

      <el-menu-item index="1">
        <router-link
          :key="222"
          :to="{ name: 'pcIndex' }"
          style="display:inline-block"
        >
          处理中心
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Header',

  components: {},

  data() {
    return {};
  },

  computed: {},
};
</script>
<style>
#app-sidebar {
  background: #409eff;
  color: #fff;
}
</style>
