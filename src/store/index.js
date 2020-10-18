import Vue from 'vue'
import Vuex from 'vuex'
import modA from './modA/index'
import modB from './modB/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {},
  actions: {},
  modules: {
    modA,
    modB
  }
})
