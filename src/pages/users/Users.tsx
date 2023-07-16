import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  // { field: "_id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 50,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "username",
    type: "string",
    headerName: "User Name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "password",
    type: "string",
    headerName: "Password",
    width: 100,
  },
  {
    field: "country",
    type: "string",
    headerName: "Country",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "linkedIn",
    type: "string",
    headerName: "Linked In",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "isSeller",
    headerName: "Seller",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://api-congviet.onrender.com/api/users").then((res) =>
        res.json()
      ),
  });
  useEffect(() => {
    refetch();
  }, [data]);
  return (
    <div className="users">
      <div className="info">
        <h1>Danh Sách Người Dùng</h1>
        <button onClick={() => setOpen(true)}>Thêm Người Dùng</button>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="auth/register" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
