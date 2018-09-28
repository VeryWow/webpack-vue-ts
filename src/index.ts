import Vue from 'vue'

import views from 'views'
import router from 'router'
import plugins from 'plugins'

Vue.use(plugins);

new Vue({
  el: 'app',
  router,
  render: views
});

