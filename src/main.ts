import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import auth from "./auth";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);
app.use(auth);
app.use(router);
app.use(MotionPlugin);
app.use(autoAnimatePlugin);
app.mount("#app");
