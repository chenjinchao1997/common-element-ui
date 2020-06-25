import Vue, { PluginFunction } from 'vue'
import Templete from './tmp.vue'

const install: PluginFunction<undefined> = (vue: typeof Vue) => {
  vue.component(Templete.name, Templete)
}

export default install
