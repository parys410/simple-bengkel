<template>
  <q-header class="bg-blue-100 border-solid border-blue-200 border-b-2">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="setShowDrawer"
        class="text-gray-700"
      />

      <q-toolbar-title class="text-gray-700">
        {{ config.storeName }}
      </q-toolbar-title>

      <div>
        user
      </div>
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
