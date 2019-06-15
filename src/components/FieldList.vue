<template>
  <div class="fields">
    <template v-for="field of fields">
      <Field
        :key="field.key"
        :label="field.label"
      >{{ data[field.key] || field.default | dataDefault }} {{ field.suffix }}</Field>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FieldList',

  components: { Field: () => import('./Field') },

  props: {
    data: { type: Object, required: true },
    fields: { type: Array, required: true },
  },
};
</script>

<style>
.fields {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
