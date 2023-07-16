import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import newRequest from "../../utils/newRequest";
import { ToastContainer, toast } from "react-toastify";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const queryClient = useQueryClient();
  const token = JSON.parse(
    localStorage.getItem("currentUser") as string
  )?.token;
  const [formValues, setFormValues] = useState({});

  const mutation = useMutation({
    mutationFn: () => {
      if (props.slug === "auth/register") {
        return newRequest.post(`/${props.slug}`, formValues);
      } else {
        return newRequest.post(
          `/${props.slug}s?accessToken=${token}`,
          formValues
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`${props.slug}`]);
    },
    onError: (error) => {
      console.log(error);
      return toast.error("lỗi rồi", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    mutation.mutate();
    props.setOpen(false);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  console.log(formValues);
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Thêm Người Dùng Mới</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  name={column.field}
                  onChange={handleChange}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Add;
