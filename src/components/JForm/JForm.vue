<template>
<form>
  <slot></slot>
</form>
</template>

<script>
export default {
  name: "JForm",
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
