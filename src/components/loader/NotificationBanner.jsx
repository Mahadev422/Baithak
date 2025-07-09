import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNotification } from "../../store/slices/notificationSlice";

const NotificationBanner = () => {
    const { show, message, type = 'success' } = useSelector(state => state.notification);
    const dispatch = useDispatch();
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(closeNotification())
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-600";

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50`}>
      <div className={`${bgColor} text-white px-4 py-2 rounded shadow-lg`}>
        {message}
      </div>
    </div>
  );
};

export default NotificationBanner;
