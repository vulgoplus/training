import Vue from 'vue'
import Vuex from 'vuex'
import global from '@stores/global'
import users from '@stores/modules/users'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  ...global,
  strict: debug,
  modules: {
    users
  }
})
