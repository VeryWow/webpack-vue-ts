import Router, { Route } from 'vue-router'

export const going = (route: Route, path: string, startsWith?: string) =>
  route.fullPath === path || route.path === path || (startsWith && route.fullPath.startsWith(startsWith));

// Reload protection
export function guard(router: Router): Router {
  router.beforeEach((to, from, next) => {
    return next();
  });

  router.afterEach((to, from) => {
  })

  return router;
}
