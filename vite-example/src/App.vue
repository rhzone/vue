

<script>
import Vue from 'vue'
window.Vue = Vue
export default {
  template: '<div @click="foo">123{{ msg }}</div>',
  data() {
    return {
      msg: '123'
    }
  },
}
</script>