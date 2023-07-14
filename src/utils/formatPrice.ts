export const formatPrice = (price: string) => {
  const amountNumber = parseInt(price); // Chuyển đổi chuỗi thành số nguyên
  const formattedAmount = amountNumber.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  }); // Định dạng số thành chuỗi tiền tệ VND

  return formattedAmount;
};
