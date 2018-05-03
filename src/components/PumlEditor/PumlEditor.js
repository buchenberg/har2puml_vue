import * as ace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'
import pumlfy from '../../utils/pumlfier'

export default {
  name: 'PumlEditor',
  data () {
    return {
      title: 'Puml Editor',
      har: this.$store.state.har
    }
  },
  mounted: function () {
    if (this.har) {
      const editor = ace.edit('puml-editor')
      let session = editor.getSession()
      editor.setOptions({
        mode: 'ace/mode/text',
        theme: 'ace/theme/monokai'
      })
      pumlfy(this.har,
        (puml) => {
          session.setValue(puml)
        })
    }
  }
}
