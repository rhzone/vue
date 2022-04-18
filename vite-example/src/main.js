import Vue from 'vue'
import App, { data } from './App.vue'

Vue.config.devtools = true
Vue.component('App', App)
new Vue({
  el: '#app',
  data() {
    return data
  },
  render: h => h(App),
  // template: '<div><App></App>App:{{msg}}</div>'
})