import { boot } from "quasar/wrappers";
import VCalendar from "v-calendar";

export default boot(({ Vue }) => {
  Vue.use(VCalendar);
});
