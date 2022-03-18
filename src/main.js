import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import Announcement from './Announcement.vue'
import Contact from './Contact.vue'
import Article from './Article.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

export const eventBus = new Vue();

Vue.component('announcement',Announcement)
Vue.component('appArticle',Article)
Vue.component('appContact',Contact)

new Vue({
  el: '#app',
  render: h => h(App)
})
