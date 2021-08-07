import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
//import "./index.css";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
//import { registerComponents } from "../src/components/Globar.js";
require("@/store/ixHttpClients");

axios.defaults.baseURL = `https://jsonplaceholder.typicode.com/`;
// createApp(App).use(store).use(router).mount("#app");
store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  const app = createApp(App);
  app.use(store);
  app.use(router);
  app.use(VueSweetalert2);
  //registerComponents(app);
  app.mount("#app");
});
// const app = createApp(App);
// app.use(store);
// app.use(router);
// app.mount("#app");
