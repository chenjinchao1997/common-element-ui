import Vue, { PluginFunction } from "vue";
import Table from "./table.vue";

const install: PluginFunction<undefined> = (vue: typeof Vue) => {
  vue.component("cel-table", Table);
};

export const NUM = 1;

export default install;
