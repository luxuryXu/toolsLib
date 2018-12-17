<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass">
      <!-- <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i> -->
      <span class="mint-toast-text">{{ message }}</span>
      <!-- <span class="mint-toast-text is-submessage" v-if="submessage">{{ submessage }}</span> -->
    </div>
  </transition>
</template>

<style>
.mint-toast {
  position: fixed;
  /*height: 60px;*/
  /*line-height: 60px;*/
  padding: 25px;
  white-space: nowrap;
  background: rgba(0,0,0,0.7);
  border-radius: 2px;
  color: #fff;
  box-sizing: border-box;
  z-index: 10000;
  transition: opacity .3s linear;
  text-align: center;
}
.mint-toast.is-placebottom {
  bottom: 50PX;
  left: 50%;
  transform: translate(-50%, 0);
}
.mint-toast.is-placemiddle {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mint-toast.is-placetop {
  top: 50PX;
  left: 50%;
  transform: translate(-50%, 0);
}
.mint-toast.success {
  background: #f0f9eb;
  color: #67c23a;
}
.mint-toast.warning {
  background: #fdf6ec;
  color: #e6a23c;
}
.mint-toast.error {
  background: #fef0f0;
  color: #f56c6c;
}
.mint-toast-text {
  font-size: 16PX;
  display: inline-block;
  vertical-align: middle;
}
.mint-toast-pop-enter, .mint-toast-pop-leave-active {
  opacity: 0
}
</style>

<script type="text/babel">
export default {
  props: {
    message: String,
    position: {
      type: String,
      default: 'middle'
    },
    type: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    customClass() {
      let classNames = []
      switch(this.position) {
        case 'top':
          classNames.push('is-placetop')
          break
        case 'bottom':
          classNames.push('is-placebottom')
          break
        default:
          classNames.push('is-placemiddle')
      }
      switch(this.type) {
        case 'success':
        case 'warning':
        case 'error':
          classNames.push(this.type)
          break
      }
      classNames.push(this.className)
      return classNames
    }
  }
}
</script>
