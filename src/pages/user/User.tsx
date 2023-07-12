import { useQuery } from "@tanstack/react-query";
import Single from "../../components/single/Single";
import newRequest from "../../utils/newRequest.js";
import "./user.scss";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const token = JSON.parse(
    localStorage.getItem("currentUser") as string
  )?.token;
  //Fetch data and send to Single Component
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () =>
      newRequest.get(`users/${id}?accessToken=${token}`).then((res: any) => {
        return res.data;
      }),
  });
  console.log(data);
  return (
    <div className="user">
      {isLoading ? "Loading..." : <Single {...data} />}
    </div>
  );
};

export default User;
