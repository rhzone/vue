import Vue from 'vue'
import App, { data } from './App.vue'

Vue.config.devtools = true
Vue.component('App', App)
new Vue({
  name: 'App',
  el: '#app',
  data() {
    return data
  },
  render: h => {
    return h(App);
  },
  // template: '<div><App></App>App:{{msg}}</div>'
})