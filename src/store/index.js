import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const rinrinData = {
  state: () => ({
    allData: []
  }),
}
const userInfo = {
  state: () => ({
    email: "",
  }),
}

export default new Vuex.Store({
  modules:{
    rinrinAll: rinrinData,
    user: userInfo 
  }
})
