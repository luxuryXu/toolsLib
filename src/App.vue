<template>
    <div class="msg-wrapper">
        <span>hello!</span>
        <span class="account">{{data.name}}</span>
    </div>
</template>
<script>
    export default {
        name: 'Msg',
        data () {
          return {}
        },
        props: {
          data: {
            type: Object
          }
        },
    }
</script>
<style lang="less" scoped>
  .msg-wrapper {
    width: 100px;
    .account {
      color: red;
    }
  }
</style>