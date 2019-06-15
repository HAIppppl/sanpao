<template>
  <div class="field">
    <label :style="{ flex: `0 0 ${labelWidth}` }" class="field-label">{{ label }}：</label>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Field',

  props: {
    label: { type: String, required: true },
    labelWidth: { type: String, default: '120px' },
  },
};
</script>

<style scoped>
.field {
  display: flex;
  flex: 0 0 300px;
}

.field-label {
  box-sizing: border-box;
  padding-right: 12px;
  text-align: right;
  color: #606266;
}
</style>
