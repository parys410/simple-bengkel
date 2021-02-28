import { boot } from "quasar/wrappers";
import { Table, Pagination } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

export default boot(({ Vue }) => {
  Vue.use(Table, Pagination);
});
