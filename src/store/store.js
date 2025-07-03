import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/product';

// Example: import your reducers here
// import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        product: productSlice
    },
    // Optional: add middleware, devTools, etc.
});

export default store;