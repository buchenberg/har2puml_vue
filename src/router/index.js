import Vue from 'vue'
import Router from 'vue-router'
import JSONEditor from '@/components/JSONEditor/JSONEditor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JSONEditor',
      component: JSONEditor
    }
  ]
})
