import { createSlice } from "@reduxjs/toolkit";
import {
  addToUserArray,
  checkAuthStatus,
  getUserDetails,
  removeFromUserArray,
  syncUserToFirestore,
} from "../fetch/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    userData: null,
    wishlists: [],
    cartStore: [],
    address: [],
    load: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message;
      });
    builder.addCase(syncUserToFirestore.rejected, (state, action) => {
      console.error("User sync failed", action.payload);
    });
    builder
      .addCase(getUserDetails.pending, (state) => {
        //state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.wishlists = action.payload.wishlists;
        state.cartStore = action.payload.cartStore;
        state.address = action.payload.address;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        console.error("Error while fetching user", action.payload);
      });
    // add or remove
    builder
      .addCase(addToUserArray.pending, (state, action) => {
        state.load = true;
      })
      .addCase(addToUserArray.fulfilled, (state, action) => {
        const { field, item } = action.payload;
        switch (field) {
          case "wishlists":
            state.wishlists.push(item);
            break;
          case "cartStore":
            state.cartStore.push(item);
            break;
          case "address":
            state.address.push(item);
            break;
          default:
          // default code block
        }
        state.load = false;
      })
      .addCase(addToUserArray.rejected, (state, action) => {
        state.load = false;
        state.error = action.payload;
      });
    builder
      .addCase(removeFromUserArray.pending, (state) => {
        state.load = true;
      })
      .addCase(removeFromUserArray.fulfilled, (state, action) => {
        const { field, item } = action.payload;
        switch (field) {
          case "wishlists":
            state.wishlists = state.wishlists.filter((p) => p !== item);
            break;
          case "cartStore":
            state.cartStore = state.cartStore.filter((p) => p !== item);
            break;
          case "address":
            state.address = state.address.filter((p) => p !== item);
            break;
          default:
          // default code block
        }
        state.load = false;
      })
      .addCase(removeFromUserArray.rejected, (state, action) => {
        state.load = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
