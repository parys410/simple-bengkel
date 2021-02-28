<template>
  <div class="pt-5 pr-5 pb-5 pl-1">
    <div>Header Location</div>
    <div class="mt-5">
      <a-table
        :columns="table.columns"
        :data-source="table.data"
        :pagination="{ pageSize: 3 }"
      >
      </a-table>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive } from "@vue/composition-api";
export default {
  setup() {
    const state = reactive({
      table: {
        columns: [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            scopedSlots: { customRender: "name" }
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
            width: 80
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address 1",
            ellipsis: true
          },
          {
            title: "Long Column Long Column Long Column",
            dataIndex: "address",
            key: "address 2",
            ellipsis: true
          },
          {
            title: "Long Column Long Column",
            dataIndex: "address",
            key: "address 3",
            ellipsis: true
          },
          {
            title: "Long Column",
            dataIndex: "address",
            key: "address 4",
            ellipsis: true
          }
        ],

        data: [
          {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
            tags: ["nice", "developer"]
          },
          {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park, London No. 2 Lake Park",
            tags: ["loser"]
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"]
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"]
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"]
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"]
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"]
          }
        ]
      }
    });
    return { ...toRefs(state) };
  }
};
</script>
