import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import auth from "./auth";

const app = createApp(App);
app.use(auth);
app.use(router);
app.mount("#app");
