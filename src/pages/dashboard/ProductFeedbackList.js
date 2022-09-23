import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productsFeedback } from "../../dummyData/mock";
import { Rating } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
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
  { field: "title", headerName: "Title", width: 200 },
  { field: "desc", headerName: "Description", width: 300 },
  {
    field: "rating",
    headerName: "Rating",
    width: 200,
    renderCell: (params) => {
      return (
        <>
          <Rating name="half-rating" value={params.value} precision={0.5} />
        </>
      );
    },
  },
  {
    field: "itemSold",
    headerName: "Items Sold",
    type: "number",
    width: 100,
  },
  {
    field: "earningAmount",
    headerName: "Total Earning",
    width: 150,
    type: "number",
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
const ProductFeedbackList = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={productsFeedback && productsFeedback}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductFeedbackList;
