import React from "react";
import { ordersData } from "../../dummyData/mock";
import { DataGrid } from "@mui/x-data-grid";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Button from "../../components/common/Button";
const columns = [
  { field: "id", headerName: "Order ID", width: 70 },
  {
    field: "ProductImage",
    headerName: "Product Image",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <img src={params.value} className="p-4" />
        </>
      );
    },
  },
  { field: "CustomerName", headerName: "Customer Name", width: 200 },
  { field: "OrderItems", headerName: "Order Items", width: 300 },
  {
    field: "TotalAmount",
    headerName: "Total Amount",
    width: 200,
  },
  {
    field: "Location",
    headerName: "Location",
    type: "number",
    width: 100,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="flex items-center gap-4">
          <button className="bg-skin-btn text-skin-base rounded-md px-2 py-1">
            <Edit sx={{ fontSize: "16px", color: "white" }} />
          </button>
          <button className="bg-skin-btn text-skin-base rounded-md px-2 py-1">
            <Delete sx={{ fontSize: "16px", color: "white" }} />
          </button>
        </div>
      );
    },
  },
];
const OrderList = () => {
  return (
    <div className="p-8 min-h-[80vh] w-full bg-skin-base rounded-lg flex flex-col gap-4 items-start justify-start dark:bg-slate-600">
      <div className="w-full flex items-center justify-between">
        <label className="text-xl font-semibold dark:text-slate-200">
          Orders List
        </label>
        <Button
          classes={
            "px-4 py-2 rounded-md bg-skin-btn text-skin-btnText flex items-center justify-between gap-2"
          }
          btnText={"Add"}
          hasIcon={true}
          iconName="add"
        />
      </div>
      <div className="w-full ">
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={ordersData && ordersData}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
