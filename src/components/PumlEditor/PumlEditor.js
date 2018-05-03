import * as ace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'
import pumlfy from '../../utils/pumlfier'

export default {
  name: 'PumlEditor',
  data () {
    return {
      title: 'Puml Editor',
      puml: ''
    }
  },
  computed: {
    har () {
      return this.$store.state.har
    }
  },
  methods: {
    renderPuml: function () {
      const editor = ace.edit('puml-editor')
      let session = editor.getSession()
      editor.setOptions({
        mode: 'ace/mode/text',
        theme: 'ace/theme/monokai'
      })
      pumlfy(this.har,
        (puml) => {
          this.puml = puml
          session.setValue(puml)
        })
    }
  },
  mounted: function () {
    if (this.har) {
      this.renderPuml()
    }
  },
  updated: function () {
    if (this.har) {
      this.renderPuml()
    }
  }
}
