import Vue from 'vue'
import toast from './toast'
// let toast = require('./toast.vue')

const ToastConstructor = Vue.extend(toast)
let toastPool = []
// console.log(require('./toast.vue'), 222)


let getAnInstance = () => {
  if (toastPool.length) {
    let instance = toastPool[0]
    toastPool.splice(0, 1)
    return instance
  }
  return new ToastConstructor({
    el: document.createElement('div')
  })
}

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

let returnInstance = instance => {
  if (instance) {
    toastPool.push(instance)
  }
}

ToastConstructor.prototype.close = function() {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
  // this.closed = true
  returnInstance(this)
}

let Toast = (options = {}) => {
  let duration = options.duration || 2000

  let instance = getAnInstance()
  // instance.closed = false
  clearTimeout(instance.timer)
  instance.message = typeof options === 'string' ? options : options.message
  instance.type = options.type || ''
  instance.position = options.position || 'middle'
  instance.className = options.className || ''
  instance.callback = options.callback || function() {}
  // console.log(instance)
  document.body.appendChild(instance.$el)
  Vue.nextTick(function() {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    ~duration &&
      (instance.timer = setTimeout(function() {
        // if (instance.closed) return
        instance.callback()
        instance.close()
      }, duration))
  })
  return instance
}

export default Toast
