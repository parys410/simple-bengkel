<template>
  <div>
    <a-modal
      v-model="showModal"
      :title="title"
      :zIndex="2000"
      :maskClosable="false"
      :closable="false"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>

      <template slot="footer">
        <a-button key="back" @click="handleClose">
          Cancel
        </a-button>
        <a-button key="submit" type="primary" @click="handleOk">
          Submit
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { toRefs, reactive, watch, computed } from "@vue/composition-api";
export default {
  props: ["visible", "title"],
  setup(props, { root, emit }) {
    const state = reactive({
      showModal: props.visible
    });

    console.log("Modal State", state.showModal);

    watch(
      () => props.visible,
      newValue => {
        state.showModal = newValue;
        console.log(newValue);
      }
    );

    const handleOk = () => {
      emit("handleOk");
    };

    const handleClose = () => {
      const answer = window.confirm(
        "Perhatian, data tidak akan tersimpan. Lanjutkan?"
      );
      if (answer) {
        emit("handleClose");
      }
    };

    return {
      ...toRefs(state),
      handleOk,
      handleClose
    };
  }
};
</script>
