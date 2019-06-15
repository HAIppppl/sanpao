<template>
  <div id="login">
    <el-button
      type="primary"
      size="mini"
      @click="handleSavingContent"
    >保存</el-button>
    <vue-editor v-model="content" />
    <div v-html="content" />
    <!-- <iframe
      frameborder="0"
      src="https://v.qq.com/txp/iframe/player.html?vid=y0023ubwgmw"
      allowFullScreen="true"
    /> -->
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: 'Login',
  components: {
    VueEditor,
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    handleSavingContent() {
      // You have the content to save
      // console.log(this.content);
    },
  },
};
</script>
