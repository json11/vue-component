<template>
<div class="form-item">
  <label v-if="label">{{ label }}</label>
  <slot></slot>
  <p v-if="error" style="color: #f00;">
    {{ error }}
  </p>
</div>
</template>

<script>
  import  Schema from 'async-validator';

  export default {
    name: "JFormItem",
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted() {
      this.$on('validate', this.validate);
    },
    methods: {
      validate() {
        // 执行校验
        const rules = this.form.rules[this.prop];
        const value = this.form.model[this.prop];
        const descriptor = {[this.prop]: rules};

        const schema = new Schema(descriptor);

        schema.validate({[this.prop]: value}, errors => {
          console.log('eroor=====',errors);
          if(errors) {
            this.error = errors[0].message;
          } else {
            this.error = '';
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
