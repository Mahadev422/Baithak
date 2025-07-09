import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notifications: [],
    unreadCount: 0,
    show: false,
    message: null,
    type: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.notifications.push(action.payload);
            state.unreadCount += 1;
        },
        markAllAsRead: (state) => {
            state.unreadCount = 0;
        },
        clearNotifications: (state) => {
            state.notifications = [];
            state.unreadCount = 0;
        },
        showNotification: (state, action) => {
            state.show = true;
            state.message = action.payload.message;
            state.type = action.payload.type || 'success';
        },
        closeNotification: (state) => {
            state.show = false;
        }

    },
});

export const { addNotification, markAllAsRead, clearNotifications, showNotification, closeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;