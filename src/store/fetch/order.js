import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const addOrder = createAsyncThunk(
  'order/addOrder',
    async (orderItem, { rejectWithValue }) => {
        try {
        // Add a new document with a generated ID
        const docRef = await addDoc(collection(db, 'orders'), orderItem);
        return { id: docRef.id, ...orderItem };
        } catch (error) {
        console.error("Error adding product: ", error);
        return rejectWithValue(error.message);
        }
    }
);

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (uid, { rejectWithValue }) => {
    try {
      const ordersRef = collection(db, "orders");
      const q = query(ordersRef, where("userId", "==", uid));
      const snapshot = await getDocs(q);

      const orders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return orders;
    } catch (error) {
      console.error("Error fetching orders:", error);
      return rejectWithValue(error.message);
    }
  }
);