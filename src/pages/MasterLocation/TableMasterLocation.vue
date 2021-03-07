<template>
  <a-table
    :rowClassName="(record, index) => 'bg-white'"
    :columns="TableHeader"
    :data-source="rows"
    :pagination="pagination"
    :loading="loading"
    rowKey="id"
    bordered
  >
    <template slot="action" slot-scope="text, record">
      <q-btn round flat color="primary" size="sm" icon="fas fa-ellipsis-v">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click="onEdit(record)">
              <q-item-section>Edit</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onDelete(record)">
              <q-item-section>Delete</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </template>
  </a-table>
</template>
<script>
import { TableHeader } from "./MasterLocation.table";
export default {
  props: ["rows", "pagination", "loading"],
  setup(props, { root, emit }) {
    const onEdit = record => {
      emit("onEdit", record);
    };
    const onDelete = record => {
      emit("onDelete", record);
    };

    return {
      TableHeader,
      onEdit,
      onDelete
    };
  }
};
</script>
