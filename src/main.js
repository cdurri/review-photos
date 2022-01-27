import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import Cloudinary, { CldImage } from "cloudinary-vue";
import axios from 'axios'

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
  render: h => h(App),
}).$mount('#app')
