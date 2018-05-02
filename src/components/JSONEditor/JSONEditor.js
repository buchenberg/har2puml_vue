import Brace from 'vue-bulma-brace'
import * as brace from 'brace'

export default {
  name: 'JSONEditor',
  components: {
    Brace
  },
  computed: {
    content () {
      return this.$store.state.ace_content
    }
  },
  mounted: function () {
    this.editor = brace.edit('vue-bulma-editor')
    let session = this.editor.getSession()
    let store = this.$store
    session.setValue(this.content)
    session.on('change', function () {
      update()
    })
    function update () {
      var data = session.getValue()
      store.commit('updateAceContent', data)
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Ace'
    }
  }
}
