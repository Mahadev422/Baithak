import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const addProduct = createAsyncThunk(
  'addProduct/addProduct',
    async (productData, { rejectWithValue }) => {
        try {
        // Add a new document with a generated ID
        const docRef = await addDoc(collection(db, 'products'), productData);
        return { id: docRef.id, ...productData };
        } catch (error) {
        console.error("Error adding product: ", error);
        return rejectWithValue(error.message);
        }
    }
);

export const getProducts = createAsyncThunk(
  'addProduct/getProducts',
    async (_, { rejectWithValue }) => {
        try {
        const productsCollection = collection(db, 'products');
        const snapshot = await getDocs(productsCollection);
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
        } catch (error) {
        console.error("Error fetching products: ", error);
        return rejectWithValue(error.message);
        }
    }
);