<template>
  <div id="q-app">
    <router-view />
    <q-inner-loading :showing="mainLoading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>
<script>
import { computed } from "@vue/composition-api";
export default {
  name: "App",
  setup(props, { root }) {
    const mainLoading = computed(() => root.$store.getters.getLoading);
    return { mainLoading };
  }
};
</script>
