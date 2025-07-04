import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import addProductSlice from './slices/addProductSlice';

// Example: import your reducers here
// import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        addProduct: addProductSlice,
    },
    // Optional: add middleware, devTools, etc.
});

export default store;