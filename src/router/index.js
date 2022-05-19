import { createWebHistory, createRouter } from "vue-router";
import LanguageLearning from "../components/LanguageLearning.vue";
import Admin from "../components/Admin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LanguageLearning,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;