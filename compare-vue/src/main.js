// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //corresponds to id in index.html
  el: '#app',
  router,
  components: { App }, //App.vue
  template: '<App/>'
})
