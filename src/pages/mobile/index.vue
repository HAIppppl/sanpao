<template>
  <!-- eslint-disable max-len -->
  <div id="page_home">
    <span @click="click">123</span>
  </div>
</template>

<script>
export default {
  name: 'Moblie',

  data() {
    return {};
  },
  methods: {
    click() {
      this.$router.push({
        name: 'login',
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
