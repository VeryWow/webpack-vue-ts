import { RouteConfig } from 'vue-router'
import { Component } from 'vue-router/types/router'

export const page = (name: string): Component => ({
  render: h => h(require('../views/pages/' + name).default)
});

export const component = (name: string): Component => ({
  render: h => h(require('../views/components/' + name).default)
});

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'welcome',
    component: page('welcome.vue')
  }
];
