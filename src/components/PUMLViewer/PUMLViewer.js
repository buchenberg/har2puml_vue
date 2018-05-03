export default {
  name: 'PUMLViewer',
  computed: {
    har () {
      try {
        var o = JSON.parse(this.$store.state.ace_content)
        if (o && typeof o === 'object') {
          return o
        }
      } catch (e) { }
      return false
    }
  },
  components: {
  },
  mounted: function () {
  },
  data () {
    return {
      msg: 'Welcome to Your PUML'
    }
  }
}
