<template>
  <div>
      <HarEditor/>
      <HarViewer/>
      <PumlEditor/>
  </div>
</template>

<script>
import HarEditor from '@/components/HarEditor/HarEditor.vue'
import HarViewer from '@/components/HarViewer/HarViewer.vue'
import PumlEditor from '@/components/PumlEditor/PumlEditor.vue'

export default {
  name: 'Home',
  components: {
    HarEditor,
    HarViewer,
    PumlEditor
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
