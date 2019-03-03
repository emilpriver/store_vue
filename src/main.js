import Vue from 'vue';
import './plugins/axios';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from './router';

//  cookies
Vue.use(VueCookies);
//  cookies config
VueCookies.config('7d');

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
