<template>
  <div>
    <input v-bind="$attrs" :value="value" @input="onInput">
  </div>
</template>

<script>
  export default {
    name: "JInput",
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onInput(e) {
        // 通知父组件值改变了
        this.$emit('input', e.target.value);
        // 通知父组件做检验
        this.$parent.$emit('validate');
      }
    }
  }
</script>

<style scoped>

</style>
