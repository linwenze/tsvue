import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SvgIcon from "./assets/icons";
createApp(App).use(router).use(SvgIcon, { imports: [] }).mount("#app");
