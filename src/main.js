// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedState(
      {
        'key': 'har_cache',
        'paths': [
          'har'
        ]
      }
    )],
  state: {
    har: '',
    puml: ''
  },
  mutations: {
    updateHarContent (state, data) {
      state.har = data
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
