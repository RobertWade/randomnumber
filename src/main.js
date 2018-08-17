import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' 

import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
