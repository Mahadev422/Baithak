import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

// 🔄 Async thunk to listen to auth status
export const checkAuthStatus = createAsyncThunk(
  "auth/checkAuthStatus",
  async (_, thunkAPI) =>
    new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe(); // only run once
          resolve(user ? (user.uid) : null);
        },
        (error) => {
          reject(error.message);
        }
      );
    })
);

export const syncUserToFirestore = createAsyncThunk(
  "auth/syncUserToFirestore",
  async (user, thunkAPI) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
          wishlists: [],
          cartStore: [],
          address: []
        });
      }

      return "User synced";
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);