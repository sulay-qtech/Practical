import Login from "./Component/Login.vue";
import Dashboard from "./Component/Dashboard.vue";

const router = [
    {
    path: "/",
    component: Login,
  },
  {
      path:"/dashboard",
      component:Dashboard
  }
];
export default router;