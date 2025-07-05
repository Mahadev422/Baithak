
// Placeholder components for each tab





const SettingsTab = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h2>
    <p className="text-gray-600 mb-6">Manage your account preferences.</p>
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
        <div>
          <h3 className="font-medium text-gray-800">Email Notifications</h3>
          <p className="text-sm text-gray-500">Receive updates via email</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
        </label>
      </div>
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
        <div>
          <h3 className="font-medium text-gray-800">Dark Mode</h3>
          <p className="text-sm text-gray-500">Switch to dark theme</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
        </label>
      </div>
    </div>
  </div>
);

export default ProfilePage;