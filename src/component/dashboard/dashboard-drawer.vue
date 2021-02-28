<template>
  <q-drawer
    show-if-above
    v-model="showDrawer"
    side="left"
    content-style="background: #fbfcff; padding: 0px 20px 0px 0px;"
  >
    <div class="relative bg-white shadow-lg pt-5 pb-5 h-full">
      <q-list>
        <q-item
          clickable
          v-ripple
          to="/dashboard/home"
          exact
          exact-active-class="border-r-2 border-solid border-blue-300 bg-blue-100"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-tachometer-alt" class="text-gray-500" />
          </q-item-section>
          <q-item-section class="text-gray-500">Beranda</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fas fa-store" class="text-gray-500" />
          </q-item-section>
          <q-item-section class="text-gray-500">Kasir</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fas fa-chart-pie" class="text-gray-500" />
          </q-item-section>
          <q-item-section class="text-gray-500">Laporan</q-item-section>
        </q-item>
        <q-expansion-item
          dense-toggle
          icon="fas fa-database"
          label="Master Data"
          class="text-gray-500"
        >
          <q-item clickable v-ripple>
            <q-item-section class="text-gray-500">Data Barang</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/dashboard/master-location"
            exact
            exact-active-class="border-r-2 border-solid border-blue-300 bg-blue-100"
          >
            <q-item-section class="text-gray-500">Data Lokasi</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section class="text-gray-500">Data User</q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
      <div>
        <q-list class="absolute bottom-5 w-full">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-cog" class="text-gray-500" />
            </q-item-section>
            <q-item-section class="text-gray-500">Pengaturan</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleLogout">
            <q-item-section avatar>
              <q-icon name="fas fa-power-off" class="text-gray-500" />
            </q-item-section>
            <q-item-section class="text-gray-500">Log Out</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const showDrawer = computed(() => root.$store.getters.getShowDrawer);

    const handleLogout = () => {
      root.$store.dispatch("removeUserCredential");
      root.$router.replace({
        name: "Login"
      });
    };

    return { showDrawer, handleLogout };
  }
};
</script>
