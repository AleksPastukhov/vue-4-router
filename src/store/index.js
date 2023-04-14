import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 10
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})

export default store
