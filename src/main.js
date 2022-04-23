import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import SplitCarousel from "vue-split-carousel";
import "element-plus/dist/index.css";
// import { VueMq } from "vue-mq";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(SplitCarousel);
// app.use(VueMq, {
//   breakpoints: {
//     mobile: 450,
//     tablet: 900,
//     desktop: 1250,
//   },
//   defaultBreakpoint: "desktop",
// });
app.mount("#app");
