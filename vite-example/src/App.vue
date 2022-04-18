<template>
  <div id="main">
    {{ msg }}
  </div>
</template>

<script>
export const data = {
  msg: 'hi'
}
export default {
  data() {
    return data
  },
  created() {
    window.vm = this;
  },
  methods: {
    
  },
}
</script>
