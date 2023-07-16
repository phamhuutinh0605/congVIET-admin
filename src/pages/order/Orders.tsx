import { useState } from "react";
import "./Orders.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const columns: GridColDef[] = [
  // { field: "_id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200,
  },
  {
    field: "sellerId",
    type: "string",
    headerName: "Người Bán",
    width: 300,
  },
  {
    field: "buyerId",
    type: "string",
    headerName: "Người Mua",
    width: 200,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 90,
  },
  {
    field: "createdAt",
    headerName: "Ngày Đặt",
    width: 200,
    type: "string",
  },
  {
    field: "Payment",
    headerName: "Thanh Toán",
    width: 100,
    type: "boolean",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);
  const token = JSON.parse(
    localStorage.getItem("currentUser") as string
  )?.token;

  const { isLoading, data } = useQuery({
    queryKey: ["allorders"],
    queryFn: () =>
      newRequest.get(`/orders?accessToken=${token}`).then((res: any) => {
        return res.data;
      }),
  });
  console.log(data)
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Orders</button>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="orders" columns={columns} rows={data} />
      )}
      {open && <Add slug="order" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Orders;
