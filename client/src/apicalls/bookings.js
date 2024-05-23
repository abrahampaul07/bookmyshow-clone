import { axiosInstance } from ".";

//make payment
export const MakePayment = async (token, amount) => {
  try {
    const response = await axiosInstance.post("/api/bookings/make-payment", {
      token,
      amount,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const BookShowTickets = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/api/bookings/book-show",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };
  
  // get bookings of a user
  export const getAllBookings = async () => {
    try {
      const response = await axiosInstance.get("/api/bookings/get-all-bookings");
      return response.data;
    } catch (error) {
      return error.response;
    }
  };
