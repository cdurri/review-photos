import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import Cloudinary, { CldImage } from "cloudinary-vue";
import axios from 'axios'
import VueRouter from 'vue-router';
import ReviewForm from './components/ReviewForm.vue';
import Reviews from './components/Reviews.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'reviews_form',
      component: ReviewForm
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
  ]
});

Vue.prototype.$http = axios;

Vue.use(Cloudinary, {
  configuration: { 
    cloudName: "smartbox",
    secure: true },
    components: {
      CldImage,
    } 
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
