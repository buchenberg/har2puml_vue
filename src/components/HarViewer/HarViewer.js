export default {
  name: 'HarViewer',
  computed: {
    har () {
      try {
        var o = JSON.parse(this.$store.state.har)
        if (o && typeof o === 'object') {
          return o
        }
      } catch (e) { }
      return false
    }
  },
  methods: {
    host (url) {
      let _url = new URL(url)
      return _url.hostname
    },
    path (url) {
      let _url = new URL(url)
      return _url.pathname
    }
  },
  data () {
    return {
      title: 'HAR Viewer'
    }
  }
}
