<template>
  <div class="jnotice">
    <div class="jnotice-content" :key="item.id" v-for="item in notices">
      {{ item.content }}
    </div>
  </div>
</template>

<script>
  let seed = 0;
  export default {
    name: "Notice",
    data() {
      return {
        notices: [],
      }
    },
    methods: {
      add(notice) {
        let id = 'j_' + (seed++);
        // 给每一个notice 绑定一个id
        this.notices.push({
          ...notice,
          id,
        });
        let duration = notice.duration || 1.5
        setTimeout(() => {
          this.remove(id);
        }, duration * 1000);
      },
      remove(id) {
        this.notices = this.notices.filter(v => v.id !== id);
      }
    }
  }
</script>

<style>
  .jnotice{
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
  }
  .jnotice-content{
    width:200px;
    margin:10px auto;
    font-size:14px;
    border:red 3px solid;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 8px;
  }
</style>
