import { PluginFunction } from "vue";

const commonPlugins: PluginFunction<any> = (Vue, options) => {
  // Define node environment shorthands on the Vue prototype
  Object.defineProperties(Vue.prototype, {
    '$environment': {
      get() {
        return process.env.NODE_ENV;
      }
    },
    '$isDevelopment': {
      get() {
        return process.env.NODE_ENV === 'development';
      }
    }
  });

  // Configure Vue
  Vue.config.productionTip = Vue.prototype.$isDevelopment;
  Vue.config.devtools = Vue.prototype.$isDevelopment;
  Vue.config.performance = !Vue.config.devtools;
}

// Reflect defined shorthands in the Vue types
declare module 'vue/types/vue' {
  interface Vue {
    $environment: string,
    $isDevelopment: boolean
  }
}

export default commonPlugins;
