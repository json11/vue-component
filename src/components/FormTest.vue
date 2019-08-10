<template>
<div class="form-test">
  <h3>自定义表单组件</h3>
  <hr>
  <j-form :model="model" :rules="rules" ref="jLoginForm">
    <j-form-item label="用户名" prop="username">
      <j-input v-model="model.username"></j-input>
    </j-form-item>
    <j-form-item label="密码" prop="password">
      <j-input type="password" v-model="model.password"></j-input>
    </j-form-item>
  </j-form>

  <hr>
  <h3>Element表单</h3>
  <hr>
  <el-form :model="model" :rules="rules" ref="loginForm">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="model.username"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="model.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
    </el-form-item>
  </el-form>

  <br>
  <h3>自定义notice api组件</h3>

  <button @click="onClick">notice</button>

</div>
</template>

<script>

  import JForm from './JForm/JForm';
  import JFormItem from './JForm/JFormItem';
  import JInput from './JForm/JInput';

  export default {
    name: 'FormTest',
    components: {
      JForm,
      JFormItem,
      JInput
    },
    data() {
      return {
        model: {
          username: '',
          password: '',
        },
        rules: {
          username: [{required: true, message: "请输入用户名"}],
          password: [{required: true, message: "请输入密码"}],
        }
      };
    },
    methods: {
      validate() {
        console.log('子组件通知validate');
      },
      submitForm(form) {
        this.$refs[form].validate(valid => {
          console.log(valid);
          if(valid) {
            alert('请求登录');
          } else {
            alert('校验失败');
          }
        })
      },
      onClick() {
        this.$Notice.info({
          content: 'ceshi'
        })
      }
    }
  }
</script>

<style>

</style>
