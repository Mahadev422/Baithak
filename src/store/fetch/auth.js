import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// 🔄 Async thunk to listen to auth status
export const checkAuthStatus = createAsyncThunk(
  "auth/checkAuthStatus",
  async (_, thunkAPI) =>
    new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe(); // only run once
          resolve(user ? user.uid : null);
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
    if (typeof user !== 'string' || user.trim() === '') {
        return rejectWithValue('Invalid user ID');
      }
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
          address: [],
          phoneNumber: "",
        });
      }

      return "User synced";
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserById",
  async (uid, { rejectWithValue }) => {
    if (typeof uid !== 'string' || uid.trim() === '') {
        return rejectWithValue('Invalid user ID');
      }
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const createdAt = userData.createdAt?.toDate?.() ?? null;
        return {
          id: userSnap.id,
          ...userData,
          createdAt: createdAt ? createdAt.toISOString() : null,
        }; // ✅ user data
      } else {
        return rejectWithValue("User not found");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const addToUserArray = createAsyncThunk(
  "user/addToUserArray",
  async ({ uid, field, item }, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        [field]: arrayUnion(item),
      });
      return { uid, field, item };
    } catch (error) {
      console.error("Error adding to array:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromUserArray = createAsyncThunk(
  "user/removeFromUserArray",
  async ({ uid, field, item }, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        [field]: arrayRemove(item),
      });
      return { uid, field, item };
    } catch (error) {
      console.error("Error removing from array:", error);
      return rejectWithValue(error.message);
    }
  }
);
