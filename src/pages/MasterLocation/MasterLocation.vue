<template>
  <div class="pt-5 pr-5 pb-5 pl-1">
    <div class="main-header">
      <q-btn flat class="bg-blue-400" @click="showModal()">
        <q-icon left size="xs" name="fas fa-plus" class="text-white" />
        <div class="text-white">Tambah</div>
      </q-btn>
    </div>
    <div class="mt-5">
      <TableMasterLocation
        :rows="table.data"
        :pagination="{ pageSize: 7 }"
        :loading="false"
        @onEdit="onEdit"
        @onDelete="onDelete"
      />
    </div>

    <!-- Modal Registration -->
    <ModalMasterLocation
      :visible="modal.visible"
      :title="modal.title"
      @handleOk="handleOk"
      @handleClose="handleClose"
    ></ModalMasterLocation>
  </div>
</template>
<script>
import { toRefs, reactive } from "@vue/composition-api";
import TableMasterLocation from "./TableMasterLocation";
import ModalMasterLocation from "./ModalMasterLocation";
export default {
  components: { TableMasterLocation, ModalMasterLocation },
  setup(props, { root }) {
    const state = reactive({
      table: {
        data: [
          {
            id: "12345678",
            nama: "Lemari Besi",
            detail: "Ruangan Utama disebelah pintu"
          }
        ]
      },
      modal: {
        visible: false,
        title: "Basic Modal Parent"
      }
    });

    const showModal = () => {
      state.modal.visible = true;
      state.modal.title = "Tambah Data Lokasi";
    };

    // For Create New
    const handleOk = () => {
      state.modal.visible = false;
    };
    const handleClose = () => {
      state.modal.visible = false;
    };

    // For Table
    const onDelete = data => {
      root.$confirm({
        title: `Konfirmasi`,
        content: `Apakah anda yakin menghapus ${data.nama}?`,
        onOk() {},
        onCancel() {}
      });
    };
    const onEdit = data => {
      state.modal.visible = true;
      state.modal.title = "Edit Data Lokasi";
    };

    return {
      ...toRefs(state),
      showModal,
      onDelete,
      onEdit,
      handleOk,
      handleClose
    };
  }
};
</script>
