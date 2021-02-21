<template>
  <q-drawer show-if-above v-model="showDrawer" side="left">
    content
  </q-drawer>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const showDrawer = computed(() => root.$store.getters.getShowDrawer);

    return { showDrawer };
  }
};
</script>
