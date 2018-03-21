import { RouterOptions } from 'vue-router'
import { routes } from './routes'

export const options: RouterOptions = {
  routes,
  base: '/',
	mode: 'history',
	linkActiveClass: 'active-link',
	linkExactActiveClass: 'exact-active-link',
  fallback: false,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 48 } };
    } else {
      return { x: 0, y: 0 };
    }
  }
}

export * from './guard'
