import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import vuex from 'vuex'
import Home from './components/home.vue'
import User from './components/User.vue'


Vue.use(vueRouter)
Vue.use(vuex)

const store = new vuex.Store({
  state: {
    count: 0
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

const routes = [
  { component: Home, path: "/" },
  { component: User, path: "/user" },
]
const router = new vueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
