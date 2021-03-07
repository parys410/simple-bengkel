export const TableHeader = [
  {
    title: "ID",
    dataIndex: "id",
    width: 100
  },
  {
    title: "Nama",
    dataIndex: "nama"
  },
  {
    title: "Detail",
    dataIndex: "detail",
    ellipsis: true
  },
  {
    title: "Action",
    dataIndex: "action",
    scopedSlots: { customRender: "action" },
    width: 80
  }
];
