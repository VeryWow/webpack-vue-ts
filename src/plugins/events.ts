import { PluginFunction } from "vue";

type eventHandlerOptions = {
  once: boolean
}

class EventManagment {
  private eventHandlersMap: { [key: string]: Map<Function, eventHandlerOptions> } = {}

  private addEventHandler(eventName: string, callback: Function, options: eventHandlerOptions) {
    let evnt = this.eventHandlersMap[eventName];
    if (!evnt) {
      evnt = new Map();
    }

    if (!evnt.has(callback)) {
      evnt.set(callback, options);
    }
  }

  on(eventName: string, callback: Function): boolean {
    this.addEventHandler(eventName, callback, {
      once: false
    })
    return true;
  }

  once(eventName: string, callback: Function): boolean {
    this.addEventHandler(eventName, callback, {
      once: true
    })
    return true;
  }

  off(eventName: string, callback: Function): boolean {
    let evnt = this.eventHandlersMap[eventName]
    if (!evnt) {
      return true;
    }

    if (evnt.has(callback)) {
      return evnt.delete(callback);
    }

    return true;
  }

  emit(eventName: string, ...args): void {
    let handlersToDelete: Function[] = [];
    let evnt = this.eventHandlersMap[eventName];
    if (evnt) {
      evnt.forEach((options: eventHandlerOptions, handler: Function) => {
        handler(...args);
        if (options.once) {
          handlersToDelete.push(handler);
        }
      });
      handlersToDelete.forEach(el => {
        evnt.delete(el);
      })
    }
  }
}

const eventsPlugins: PluginFunction<any> = (Vue, options) => {

  const eventMap = new EventManagment();

  Object.defineProperties(Vue.prototype, {
    '$events': {
      get() {
        return eventMap;
      }
    }
  });
}

// Reflect defined shorthands in the Vue types
declare module 'vue/types/vue' {
  interface Vue {
    $events: EventManagment
  }
}

export default eventsPlugins;
