import debounce from "./debounce";
import throttle from "./throttle";
import Vue from "vue";
import { DirectiveOptions, PluginFunction } from "vue";

export const debounceDirective: DirectiveOptions = {
  bind: function(el: Element, { value, arg, modifiers }, vnode) {
    if (arg == null) {
      throw new Error("no event name");
    }
    const delay = modifiers.long ? 1000 : modifiers.short ? 100 : 300;
    const fn = debounce(value, delay);
    if (modifiers.native) {
      el.addEventListener(arg, fn.bind(vnode.context));
    } else {
      if (vnode.componentInstance == null) {
        throw new Error("no componentInstance");
      }
      vnode.componentInstance.$on(arg, fn.bind(vnode.context));
    }
  }
};

export const throttleDirective: DirectiveOptions = {
  bind: function(el: Element, { value, arg, modifiers }, vnode) {
    if (arg == null) {
      throw new Error("no event name");
    }
    const delay = modifiers.long ? 1000 : modifiers.short ? 100 : 300;
    const fn = throttle(value, delay);
    if (modifiers.native) {
      el.addEventListener(arg, fn.bind(vnode.context));
    } else {
      if (vnode.componentInstance == null) {
        throw new Error("no componentInstance");
      }
      vnode.componentInstance.$on(arg, fn.bind(vnode.context));
    }
  }
};

const install: PluginFunction<undefined> = (vue: typeof Vue) => {
  vue.directive("debounce", debounceDirective);
  vue.directive("throttle", throttleDirective);
};

export default install;
