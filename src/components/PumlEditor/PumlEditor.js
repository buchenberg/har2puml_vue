// import * as ace from 'brace'
// import 'brace/mode/javascript'
// import 'brace/theme/monokai'
import plantumlEncoder from 'plantuml-encoder'
import pumlfy from '../../utils/pumlfier'

export default {
  name: 'PumlEditor',
  data () {
    return {
      title: 'Plant UML',
      puml: null,
      encoded: null,
      puml_url: null
    }
  },
  computed: {
    har () {
      return this.$store.state.har
    }
  },
  methods: {
    renderPuml: function () {
      // const editor = ace.edit('puml-editor')
      // let session = editor.getSession()
      // editor.setOptions({
      //   mode: 'ace/mode/text',
      //   theme: 'ace/theme/monokai'
      // })
      // editor.$blockScrolling = Infinity
      pumlfy(this.har,
        (puml) => {
          this.puml_url = `https://www.plantuml.com/plantuml/svg/${plantumlEncoder.encode(puml)}`
          this.puml = puml
          // session.setValue(puml)
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
