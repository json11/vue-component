<template>
  <div id="app">
    <FormTest />
    <Throttle :time = '1000' events = 'click'>
      <button @click="clickBtn">click</button>
    </Throttle>
  </div>
</template>

<script>
import FormTest from './components/FormTest.vue'
import Throttle from './components/Throttle/Throttle.js'

export default {
  name: 'app',
  components: {
    FormTest,
    Throttle
  },
  methods: {
    clickBtn() {
      console.log('click');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
