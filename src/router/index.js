import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Portfolio from "../views/PortfolioView.vue";
import Maintenance from "../views/MaintenanceView.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home,
    // },
    // {
    //   path: "/portfolio",
    //   name: "Portfolio",
    //   component: Portfolio,
    // },
    {
      path: "/",
      name: "Maintenace",
      component: Maintenance,
    },
  ],
});

export default router;
