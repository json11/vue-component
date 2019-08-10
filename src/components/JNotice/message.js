
import Notice from './Notice.vue';
import Vue from 'vue';


// 给组件实例上挂一个一个方法
Notice.newInstance = properties => {
  const props = properties || {};
  const Instance = new Vue({
    data: props,
    render: h => h(Notice, {
      props: props
    })
  });

  // 生成组件实例
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const notice = Instance.$children[0];
  return {
    add(noticeProps) {
      notice.add(noticeProps)
    },
    remove(name) {
      notice.remove(name);
    }
  }
}

export default Notice
