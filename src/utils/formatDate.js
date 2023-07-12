export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("vi-VN", { dateStyle: "short" });
  return formattedDate;
};
