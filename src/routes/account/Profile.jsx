const Profile = () => (
  <div className="rounded-lg">
    <div className="border-b border-gray-200 pb-4 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
      <p className="text-gray-500 mt-1">View your account details</p>
    </div>
    
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Name
          </label>
          <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 font-medium">
            John Doe
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Phone
          </label>
          <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 font-medium">
            (555) 123-4567
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Member Since
          </label>
          <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 font-medium">
            January 2022
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
          Email Address
        </label>
        <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 font-medium">
          john.doe@example.com
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
          Address
        </label>
        <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 font-medium">
          123 Main Street<br />
          Springfield, ST 12345<br />
          United States
        </div>
      </div>
      
    </div>
    
    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
      <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
        Request Information Update
      </button>
    </div>
  </div>
);

export default Profile;