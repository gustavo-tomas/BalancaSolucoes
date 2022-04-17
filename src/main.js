import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import SplitCarousel from "vue-split-carousel";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(SplitCarousel);
app.mount("#app");
