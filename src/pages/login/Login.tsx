import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import newRequest from "../../utils/newRequest";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      if (err) {
        toast.error("Lỗi", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <label htmlFor="">Tên đăng nhập</label>
        <input
          name="username"
          type="text"
          placeholder="tinhph"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Mật khẩu</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Đăng nhập</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
