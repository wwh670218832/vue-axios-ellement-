import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  linkActiveClass:"navActive",
  routes
})

export default router;



