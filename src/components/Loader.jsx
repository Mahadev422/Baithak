import React from "react";

const BaithakLoader = ({ size = "md", variant = "primary" }) => {
  // Size variants
  const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-3",
    lg: "h-16 w-16 border-4",
  };

  // Color variants
  const colorClasses = {
    primary: "border-b-primary-500 border-t-primary-500",
    secondary: "border-b-secondary-500 border-t-secondary-500",
    light: "border-b-gray-200 border-t-gray-200",
    dark: "border-b-gray-800 border-t-gray-800",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div
        className={`animate-spin rounded-full border-transparent ${sizeClasses[size]} ${colorClasses[variant]}`}
        style={{ animationDuration: "0.75s" }}
      ></div>
      <div className="text-sm font-medium text-gray-600">
        Loading Baithak...
      </div>
    </div>
  );
};

export default BaithakLoader;