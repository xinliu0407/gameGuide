import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "./assets/main.css";

const app = createApp(App);
app.use(router);
import { Cell, NavBar } from "vant";
import "vant/lib/index.css";
app.use(Cell);
app.use(NavBar);
app.mount("#app");
