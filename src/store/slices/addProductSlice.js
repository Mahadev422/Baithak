import { createSlice } from "@reduxjs/toolkit";
import { imageToUrl } from "../fetch/addProduct";

const initialState = {
  imageUrl: null,
  loading: false,
  error: null,
};

const addProductSlice = createSlice({
  name: "add-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(imageToUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(imageToUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.imageUrl = action.payload;
      })
      .addCase(imageToUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { fetchProductsStart } = addProductSlice.actions;

export default addProductSlice.reducer;
