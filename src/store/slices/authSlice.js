import { createSlice } from "@reduxjs/toolkit";
import {
  addToUserArray,
  checkAuthStatus,
  getUserDetails,
  syncUserToFirestore,
} from "../fetch/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
    userData: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.loading = false;
    },
  },
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
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        console.error("Error while fetching user", action.payload);
      });
    builder
      .addCase(addToUserArray.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToUserArray.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Item added:", action.payload);
      })
      .addCase(addToUserArray.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
