import { createApp } from "vue";
import { createPinia } from "pinia";
import Unicon from "vue-unicons";
import {
  uniGithubMonochrome,
  uniExternalLinkAlt,
} from "vue-unicons/dist/icons";

Unicon.add([uniGithubMonochrome, uniExternalLinkAlt]);
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.use(Unicon);
app.use(createPinia());
app.use(router);

app.mount("#app");
