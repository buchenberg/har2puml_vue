import Vue from 'vue'
import Router from 'vue-router'
// import HarEditor from '@/components/HarEditor/HarEditor.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
