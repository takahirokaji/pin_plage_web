import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const rinrinData = {
  state: () => ({
    allData: []
  }),
}

export default new Vuex.Store({
  modules:{
    rinrinAll: rinrinData
  }
})
