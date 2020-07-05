<template>
  <div>
    table
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CommonDirectives from "common-directives";

Vue.use(CommonDirectives);

export default Vue.extend({
  props: {
    msg: String
  }
});
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
