import React from "react";

const Settings = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <div className="bg-white shadow rounded-lg p-6 space-y-8">
        {/* Profile Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Password Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Current Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Current Password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="New Password"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Update Password
            </button>
          </form>
        </section>

        {/* Notification Preferences */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <form className="space-y-2">
            <div className="flex items-center">
              <input
                id="email-notifications"
                type="checkbox"
                className="mr-2"
              />
              <label htmlFor="email-notifications" className="text-sm">
                Email me about order updates
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="promo-notifications"
                type="checkbox"
                className="mr-2"
              />
              <label htmlFor="promo-notifications" className="text-sm">
                Send me promotional offers
              </label>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Save Preferences
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Settings;