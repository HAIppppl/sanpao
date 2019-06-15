<template>
  <div>
    <div
      v-if="type===TYPE.pc"
      id="app-container"
    >
      <pcContainer />
    </div>
    <div v-if="type===TYPE.mobile">
      <mobileContainer />
    </div>
  </div>
</template>

<script>
import pcContainer from './pc/pcContainer';
import mobileContainer from './mobile/mobileContainer';

const TYPE = {
  pc: 1,
  mobile: 2,
};

export default {
  name: 'Index',

  components: { mobileContainer, pcContainer },

  data() {
    return {
      type: undefined,
      TYPE,
    };
  },
  mounted() {
    this.rem();
    if (document.documentElement.clientWidth > 1200) {
      this.type = this.TYPE.pc;
    } else {
      this.type = this.TYPE.mobile;
    }
  },
  methods: {
    rem() {
      function getRem(pwidth, prem) {
        const html = document.getElementsByTagName('html')[0];
        const oWidth = document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = `${(oWidth / pwidth) * prem}px`;
      }
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth <= 1200) {
        window.onload = function() {
          getRem(1200, 100);
        };
        window.onresize = function() {
          getRem(1200, 100);
        };
      }
    },
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
