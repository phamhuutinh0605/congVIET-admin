import { useParams } from "react-router-dom";
import Single from "../../components/single/Single";
import "./product.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Product = () => {
  //Fetch data and send to Single Component
  const { id } = useParams();
  const token = JSON.parse(
    localStorage.getItem("currentUser") as string
  )?.token;
  //Fetch data and send to Single Component
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () =>
      newRequest.get(`gigs/${id}?accessToken=${token}`).then((res: any) => {
        return res.data;
      }),
  });
  console.log(data);
  return (
    <div className="product">
      {isLoading ? "Loading..." : <Single {...data} />}
    </div>
  );
};

export default Product;
