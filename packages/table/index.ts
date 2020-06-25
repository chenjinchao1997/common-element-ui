import Vue, { PluginFunction } from "vue";
import Table from "./table.vue";

const install: PluginFunction<undefined> = (vue: typeof Vue) => {
  vue.component(Table.name, Table);
};

export default install;
