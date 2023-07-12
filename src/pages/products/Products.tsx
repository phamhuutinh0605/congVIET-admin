import { useState } from "react";
import "./Products.scss";
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
    field: "desc",
    type: "string",
    headerName: "Description",
    width: 300,
  },
  {
    field: "cat",
    type: "string",
    headerName: "Category",
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
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "Verify",
    headerName: "Verify",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const token = JSON.parse(
    localStorage.getItem("currentUser") as string
  )?.token;

  const { isLoading, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      newRequest.get(`/gigs?accessToken=${token}`).then((res: any) => {
        return res.data;
      }),
  });

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="gigs" columns={columns} rows={data} />
      )}
      {open && <Add slug="gig" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;