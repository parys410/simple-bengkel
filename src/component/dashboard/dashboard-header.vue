<template>
  <q-header elevated class="bg-white">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="setShowDrawer"
        class="text-gray-600"
      />

      <q-toolbar-title class="text-gray-600">
        {{ config.storeName }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
<script>
import { computed, reactive, toRefs } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const state = reactive({
      config: root.$store.getters.getConfig
    });
    const showDrawer = computed(() => root.$store.getters.getShowDrawer);

    const setShowDrawer = () => {
      root.$store.commit("setShowDrawer", !showDrawer.value);
    };

    return { ...toRefs(state), setShowDrawer };
  }
};
</script>
