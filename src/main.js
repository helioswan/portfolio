import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import Unicon from "vue-unicons";
import { uniLinkedin, uniGithub, uniCheck } from "vue-unicons/dist/icons";

Unicon.add([uniLinkedin, uniGithub, uniCheck]);

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);
app.use(Unicon);

app.mount("#app");
