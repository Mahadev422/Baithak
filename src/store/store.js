import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import addProductSlice from './slices/addProductSlice';
import authSlice from './slices/authSlice';
import notificationSlice from './slices/notificationSlice';
import orderSlice from './slices/orderSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        addProduct: addProductSlice,
        auth: authSlice,
        notification: notificationSlice,
        order: orderSlice,
    },
    // Optional: add middleware, devTools, etc.
});

export default store;