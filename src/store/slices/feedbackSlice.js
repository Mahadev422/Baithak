import { createSlice } from "@reduxjs/toolkit";
import { sendFeedback } from "../fetch/feedback";

const initialState = {
  feedback: null,
  loading: false,
  error: null,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(sendFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendFeedback.fulfilled, (state) => {
        state.loading = false;
        state.feedbacks = "Feedback sent successfully.";
      })
      .addCase(sendFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { } =
  feedbackSlice.actions;
export default feedbackSlice.reducer;
