
<script>
export const data = {
  msg: 'hi'
}
export default {
  name: 'comp',
  data() {
    return data
  },
  created() {
    window.vm = this;
  },
  methods: {
    
  },
  render(h) {
    return h('div', this.msg)
  }
}
</script>
