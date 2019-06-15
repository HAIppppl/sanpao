<template>
  <!-- eslint-disable max-len -->
  <el-container
    id="main-container"
    direction="vertical"
  >
    电脑
    <Header />
    <Main />
    <Footer />
  </el-container>
</template>

<script>
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default {
  name: 'AppContainer',

  components: { Header, Main, Footer },

  data() {
    return {};
  },
};
</script>
<style scope>
html,
body,
#app-container {
  height: 100%;
  margin: 0;
}
</style>
