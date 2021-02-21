<template>
  <div>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
      @click="createUser"
    />
  </div>
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
