import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeoLocation from "vue-browser-geolocation";
import GmapVue from "gmap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyCP-QTMs7ocdRbmaL92dkzLXJLd0_LK2ag",
    libraries: "places",
  },
});
Vue.use(VueGeoLocation);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
