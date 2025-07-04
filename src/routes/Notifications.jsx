import React from "react";

const notifications = [
  {
    type: "success",
    title: "Success!",
    message: "Your profile has been updated successfully.",
  },
  {
    type: "error",
    title: "Error!",
    message: "Failed to save changes. Please try again.",
  },
  {
    type: "warning",
    title: "Warning!",
    message: "Your subscription is about to expire.",
  },
  {
    type: "info",
    title: "Info",
    message: "New features have been added to your dashboard.",
  },
];

const typeStyles = {
  success: "bg-green-100 border-green-400 text-green-700",
  error: "bg-red-100 border-red-400 text-red-700",
  warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
  info: "bg-blue-100 border-blue-400 text-blue-700",
};

export default function Notifications() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((n, idx) => (
          <div
            key={idx}
            className={`border-l-4 p-4 rounded shadow-sm flex items-start gap-3 ${typeStyles[n.type]}`}
          >
            <span className="mt-1">
              {n.type === "success" && (
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              )}
              {n.type === "error" && (
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
              {n.type === "warning" && (
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.74-2.99l-7.07-12.25a2 2 0 00-3.48 0L3.19 16.01A2 2 0 004.93 19z" /></svg>
              )}
              {n.type === "info" && (
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              )}
            </span>
            <div>
              <div className="font-semibold">{n.title}</div>
              <div className="text-sm">{n.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}