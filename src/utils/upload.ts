import axios from "axios";

const upload = async (file: any) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "congVIET");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dfhpkct2a/image/upload",
      data
    );
    const { url } = res.data;
    return url;
  } catch (err) {}
};

export default upload;
