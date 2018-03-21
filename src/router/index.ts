import Vue from 'vue'
import Router from 'vue-router'
import { options, guard } from './config'

Vue.use(Router)

export default guard(new Router(options));
