<template>
  <q-layout view="hHh lpR fFf">
    <DashboardHeader></DashboardHeader>
    <DashboardDrawer></DashboardDrawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import DashboardHeader from "../component/dashboard/dashboard-header";
import DashboardDrawer from "../component/dashboard/dashboard-drawer";
export default {
  components: {
    DashboardHeader,
    DashboardDrawer
  },
  setup() {
    return {};
  }
};
</script>
