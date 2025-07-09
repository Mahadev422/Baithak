import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import addProductSlice from './slices/addProductSlice';
import authSlice from './slices/authSlice';
import notificationSlice from './slices/notificationSlice'

const store = configureStore({
    reducer: {
        product: productSlice,
        addProduct: addProductSlice,
        auth: authSlice,
        notification: notificationSlice,
    },
    // Optional: add middleware, devTools, etc.
});

export default store;