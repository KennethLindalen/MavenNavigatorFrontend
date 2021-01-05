import Vue from 'vue'
import VueX from 'vuex'
import App from './App.vue'
import store from './store/store.js'

Vue.config.productionTip = false;

Vue.use(VueX);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


