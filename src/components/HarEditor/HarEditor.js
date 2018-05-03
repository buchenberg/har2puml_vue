import * as ace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default {
  name: 'HarEditor',
  computed: {
    content () {
      return this.$store.state.har
    }
  },
  mounted: function () {
    const editor = ace.edit('har-editor')
    editor.setOptions({
      mode: 'ace/mode/javascript',
      theme: 'ace/theme/monokai'
    })
    editor.$blockScrolling = Infinity
    let store = this.$store
    let session = editor.getSession()
    session.setValue(this.content)
    session.on('change', function () {
      update()
    })
    function update () {
      var data = session.getValue()
      store.commit('updateHarContent', data)
    }
  },
  data () {
    return {
      title: 'HAR Editor'
    }
  }
}
