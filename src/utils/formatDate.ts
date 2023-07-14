export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("vi-VN", { dateStyle: "short" });
  return formattedDate;
};
