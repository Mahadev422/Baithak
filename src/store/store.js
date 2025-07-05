import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import addProductSlice from './slices/addProductSlice';
import authSlice from './slices/authSlice';

// Example: import your reducers here
// import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        addProduct: addProductSlice,
        auth: authSlice,
    },
    // Optional: add middleware, devTools, etc.
});

export default store;