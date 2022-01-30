import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Button from "../views/Button.vue";
import Input from "../views/Input.vue";
import Collapse from "../views/Collapse.vue";
import Pager from "../views/Pager.vue";

const routes = [
  {
    path: "/button",
    name: "button",
    component: Button,
  },
  {
    path: "/input",
    name: "input",
    component: Input,
  },
  {
    path: "/collapse",
    name: "collapse",
    component: Collapse,
  },
  {
    path: "/pager",
    name: "pager",
    component: Pager,
  },
];

const createRouter = () =>
  new Router({
    routes: routes,
  });

const router = createRouter();
export default router;
