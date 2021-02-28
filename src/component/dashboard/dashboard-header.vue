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
        <q-btn-dropdown
          flat
          :label="credential.userName"
          class="text-gray-800 uppercase"
        >
          <q-list>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label>Log Out</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script>
import { computed, reactive, toRefs } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const state = reactive({
      config: root.$store.getters.getConfig,
      credential: root.$store.getters.getUserCredential
    });
    const showDrawer = computed(() => root.$store.getters.getShowDrawer);

    const setShowDrawer = () => {
      root.$store.commit("setShowDrawer", !showDrawer.value);
    };

    const handleLogout = () => {
      root.$store.dispatch("removeUserCredential");
      root.$router.replace({
        name: "Login"
      });
    };

    return { ...toRefs(state), setShowDrawer, handleLogout };
  }
};
</script>
