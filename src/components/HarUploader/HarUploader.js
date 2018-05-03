const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  name: 'HarUploader',
  data () {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'har',
      title: 'HAR'
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    }
  },
  methods: {
    reset () {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
    },
    save (text) {
      this.currentStatus = STATUS_SAVING
      this.$store.commit('updateHarContent', text)
      this.currentStatus = STATUS_SUCCESS
      this.reset()
    },
    handleFiles (files) {
      var file = files[0]
      var save = this.save
      console.log(file.name)
      var reader = new FileReader()
      reader.onload = function (e) {
        save(e.target.result)
      }
      reader.readAsText(file)
    }
  },
  mounted () {
    this.reset()
  }
}
