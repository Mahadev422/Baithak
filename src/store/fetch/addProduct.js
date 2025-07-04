import { createAsyncThunk } from '@reduxjs/toolkit';

// Example async function to fetch an image by URL
export const imageToUrl = createAsyncThunk(
    'image/fetchImage',
    async (image, thunkAPI) => {
        try {
            const response = await fetch(imageUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);