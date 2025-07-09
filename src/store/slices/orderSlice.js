import { createSlice } from "@reduxjs/toolkit";
import { addOrder, getOrders } from "../fetch/order";

const initialState = {
  orders: null,
  loading: false,
  error: null,
  orderItem: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    storeOrder: (state, action) => {
      state.orderItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload); // Assuming the payload contains imageUrl
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add product";
      });
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export const { storeOrder } = orderSlice.actions;

export default orderSlice.reducer;
