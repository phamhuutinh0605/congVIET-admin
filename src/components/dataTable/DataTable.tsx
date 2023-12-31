import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  console.log(props.columns);
  const token = JSON.parse(
    localStorage.getItem("currentUser") as string
  )?.token;
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return newRequest.delete(`/${props.slug}/${id}?accessToken=${token}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`${props.slug}`]);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  const handleDelete = (id: number) => {
    // delete the item
    mutation.mutate(id);
    console.log(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action" key={params.row._id}>
          <Link to={`/${props.slug}/${params.row._id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row._id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="dataTable">
      <DataGrid
        getRowId={(row) => row._id}
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
