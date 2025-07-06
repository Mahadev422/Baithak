// src/redux/productSlice.js (or wherever your redux logic lives)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // adjust this path

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        };
      } else {
        return rejectWithValue("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return rejectWithValue(error.message);
    }
  }
);