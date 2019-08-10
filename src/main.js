import Vue from 'vue'
import App from './App.vue'
import './plugins/element';

import Notice from './components/JNotice/notice';

Vue.config.productionTip = false

Vue.prototype.$Notice = Notice


class Bus {
  constructor() {
    this.callbacks = [];
  }
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }
  $emit(name, args) {
    if(this.callbacks[name]) {
      this.callbacks[name].forEach(cd=> cb(args));
    }
  }
}

Vue.prototype.$dispatch = function (eventName, data) {
  let parent = this.$parent
  while (parent) {
    parent.$emit(eventName, data);
    parent = parent.$parent
  }
}
Vue.prototype.$boardcast = function (eventName, data) {
  boardcast.call(this, eventName, data);
}
function boardcast(eventName, data) {
  this.$children.forEach(child => {
    child.$emit(eventName, data);
    if(child.$children.length) {
      boardcast.call(child, eventName, data);
    }
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app')
