import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	fruits: [
  		{name:'apple', quantity:10},
  		{name:'pear', quantity:8},
  		{name:'orange', quantity:15},
  	],
  },
  mutations: {
  	increment(state, index) {
  		state.fruits[index].quantity++;
  	},
    reset(state) {
      state.fruits.forEach(elemento=>{elemento.quantity = 0});
    }
  },
  actions: {

  }
})
