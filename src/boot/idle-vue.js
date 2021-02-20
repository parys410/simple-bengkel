import { boot } from "quasar/wrappers";
import IdleVue from "idle-vue";

export default boot(({ Vue, store }) => {
  Vue.use(IdleVue, {
    store,
    idleTime: 10000,
    startAtIdle: false
  });
});
