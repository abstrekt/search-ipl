import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Vuesax from './plugins/vuesax';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  Vuesax,
  render: h => h(App),
}).$mount('#app');
