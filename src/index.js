import Msg from './app.vue';

const components = {
  Msg
};

const install = function (Vue, opts = {}) {

  Object.keys(components).forEach((key) => {
    // support byte-xxx components name
    Vue.component(components[key].name, components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  Msg
};