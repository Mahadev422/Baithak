import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../fetch/addProduct";
import { getProducts } from "../fetch/addProduct";

const initialState = {
  imageUrl: null,
  loading: false,
  error: null,
  products: []
};

const addProductSlice = createSlice({
  name: "add-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload); // Assuming the payload contains imageUrl
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add product";
      });
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export const { fetchProductsStart } = addProductSlice.actions;

export default addProductSlice.reducer;
