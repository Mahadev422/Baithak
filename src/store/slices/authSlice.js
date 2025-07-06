import { createSlice } from "@reduxjs/toolkit";
import { checkAuthStatus, syncUserToFirestore } from "../fetch/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
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
        console.log(action.payload)
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(syncUserToFirestore.rejected, (state,action) => {
        console.error('User sync failed', action.payload);
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
