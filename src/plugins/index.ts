import { PluginObject } from 'vue'

import installCommon from './common'
import installEvents from './events'

const plugins: PluginObject<any> = {
  install(Vue, options) {
    installCommon(Vue, options);
    installEvents(Vue, options);

    // Plugins should be enabled here
  }
}

export default plugins;
