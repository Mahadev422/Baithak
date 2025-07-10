// store/fetch/contact.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../../../firebaseConfig'

export const sendFeedback = createAsyncThunk(
  "contact/send",
  async (formData, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "feedbacks"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      return { id: docRef.id, ...formData };
    } catch (error) {
      console.error("Failed to send contact message:", error);
      return rejectWithValue(error.message);
    }
  }
);
