import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";
import { formatDate } from "../../utils/formatDate";
import { useState } from "react";
type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
  _id: string;
  username: string;
  email: string;
  password: string;
  country: string;
  isSeller: boolean;
  createdAt: string;
  updatedAt: string;
  phone: string;
  linkedIn: string;
  desc: string;

  shortTitle: string;
  shortDesc: string;
  cat: string;
  cover: string;
  deliveryTime: string;
  price: string;
  userId: string;
};
import { styled } from "@mui/system";
import { Grid, TextField, Button } from "@mui/material";
import { singleUser } from "../../data";

const Single = (props: Props) => {
  // USER PROPS
  const [email, setEmail] = useState(props.email);
  // const [password, setPassword] = useState(props.password);
  const [country, setCountry] = useState(props.country);
  const [phone, setPhone] = useState(props.phone);
  const [desc, setDesc] = useState(props.desc);
  const [createdAt, setcreatedAt] = useState(props.createdAt);
  const [linkedIn, setLinkedIn] = useState(props.linkedIn);
  const [isEditMode, setIsEditMode] = useState(false);

  //GIG PROPS
  const [cat, setCat] = useState(props.cat);
  const [deliveryTime, setdeliveryTime] = useState(props.deliveryTime);
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [shortTitle, setShortTitle] = useState(props.shortTitle);
  const [shortDesc, setshortDesc] = useState(props.shortDesc);

  const handleEdit = (e: any) => {
    e.preventDefault();
    setIsEditMode(true);
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    setIsEditMode(false);
    // Thực hiện lưu dữ liệu đã chỉnh sửa tại đây
    console.log(email, country, phone, createdAt, linkedIn);
  };
  const ItemContainer = styled(Grid)(() => ({
    marginBottom: "16px",
    color: "#ffffff",
  }));
  const WhiteTextField = styled(TextField)(() => ({
    "& .MuiInputLabel-root, & .MuiInputBase-root": {
      color: "#ffffff",
      marginBottom: "16px",
    },
  }));
  const WhiteButton = styled(Button)(({}) => ({
    color: "#ffffff",
  }));
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img ? (
              <img src={props.img} alt="" />
            ) : (
              <img src={props.cover} alt="" />
            )}
            <h1>{props.username ? props.username : props.title}</h1>
          </div>
          <div className="details"></div>
          {!props.userId ? (
            <ItemContainer
              container
              sx={{ marginBottom: "16px", marginTop: "20px" }}
              key={props._id}
            >
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Address"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Number Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Linked In"
                  value={linkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Introduce"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Join Date"
                  value={formatDate(createdAt)}
                  onChange={(e) => setcreatedAt(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteButton
                  variant="contained"
                  onClick={isEditMode ? handleSave : handleEdit}
                >
                  {isEditMode ? "Save" : "Edit"}
                </WhiteButton>
              </Grid>
            </ItemContainer>
          ) : (
            <ItemContainer
              container
              sx={{ marginBottom: "16px", marginTop: "20px" }}
              key={props._id}
            >
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Cat"
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Delivery Time"
                  value={deliveryTime}
                  onChange={(e) => setdeliveryTime(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Short Title"
                  value={shortTitle}
                  onChange={(e) => setShortTitle(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Short Description"
                  value={shortDesc}
                  onChange={(e) => setshortDesc(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  label="Created At"
                  value={formatDate(createdAt)}
                  onChange={(e) => setcreatedAt(e.target.value)}
                  disabled={!isEditMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteButton
                  variant="contained"
                  onClick={isEditMode ? handleSave : handleEdit}
                >
                  {isEditMode ? "Save" : "Edit"}
                </WhiteButton>
              </Grid>
            </ItemContainer>
          )}
        </div>
        <hr />
        {singleUser.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                key={singleUser.id}
                width={500}
                height={300}
                data={singleUser.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {singleUser.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {singleUser.activities && (
          <ul>
            {singleUser.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
