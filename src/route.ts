import Vue from "vue"
import VueRouter from "vue-router"

import TopPage from "./pages/TopPage.vue"
import DemoPage from "./pages/DemoPage.vue"
import InputPage from "./pages/InputPage.vue"

Vue.use(VueRouter)

export const routes = [
  { path: "/", name: "top", component: TopPage },
  { path: "/demo", name: "demo", component: DemoPage },
  { path: "/input", name: "input", component: InputPage },
]

const router = new VueRouter({
  routes: routes,
})

export default router
