import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import About from './About.vue'
import Contact from './Contact.vue'
import Home from './Home.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

export const eventBus = new Vue();

Vue.component('app-about',About)
Vue.component('app-home',Home)
Vue.component('app-contact',Contact)

new Vue({
  el: '#app',
  render: h => h(App)
})
