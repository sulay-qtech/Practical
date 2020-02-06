import Vue from 'vue'
import App from './App.vue'
// import App from "./components/App";
import VueRouter from "vue-router";
import routes from "./router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});


const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
