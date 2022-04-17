import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contacts from "../views/Contacts.vue";
import Plans from "../views/Plans.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
