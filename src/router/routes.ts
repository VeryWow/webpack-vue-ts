import { RouteConfig } from 'vue-router';

const page = (name: string) => ({
  render: h => h(require('../views/pages/' + name).default)
})
// const component = (name: string) => require('components/' + name);;

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'welcome',
    component: page('welcome.vue')
  }
]
