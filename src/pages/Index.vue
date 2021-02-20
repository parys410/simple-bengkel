<template>
  <q-page class="flex flex-center">
    <div class="flex flex-col text-center justify-center">
      <div class="text-blue-500">
        Hello World
      </div>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
        @click="createUser"
      />
    </div>
  </q-page>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  name: "PageIndex",
  setup() {
    const createUser = () => {
      ipcRenderer.send("create-user");
    };

    return { createUser };
  }
};
</script>
