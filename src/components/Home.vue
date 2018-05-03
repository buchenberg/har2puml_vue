<template>
  <div>
      <JSONEditor/>
      <PUMLViewer/>
  </div>
</template>

<script>
import JSONEditor from '@/components/JSONEditor/JSONEditor.vue'
import PUMLViewer from '@/components/PUMLViewer/PUMLViewer.vue'

export default {
  name: 'Home',
  components: {
    JSONEditor,
    PUMLViewer
  },
  mounted: function () {
  },
  data () {
    return {
      msg: 'This is base'
    }
  }
}
</script>
