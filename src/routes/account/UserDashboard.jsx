import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../store/fetch/auth';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('personal-info');
  const location = useLocation()
  const path = location.pathname;
  const { userData } = useSelector(state => state.auth);

  useEffect(() => {
    setActiveTab(path)
  },[path])

  return (
    <div className="min-h-screen lg:mx-5 flex flex-col gap-5 lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className='flex-2'>

      <div className="flex flex-col items-center mb-8 text-center">
        <div className="relative mb-4">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" 
            alt="Profile" 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-200"
          />
          <button className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-blue-600 transition-colors">
           <MdEdit />
          </button>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold">{userData?.displayName}</h1>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-col justify-center gap-2 sm:gap-4 mb-8 border-b border-gray-200 pb-4">
        {['User', 'Orders'].map(tab => (
          <Link
            key={tab}
            to={tab === 'User' ? '' : tab.toLowerCase()}
            className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${
              activeTab === (tab === 'User' ? '/account' : '/account/'+tab.toLowerCase()) 
                ? 'bg-blue-500 dark:bg-gray-700 text-white' 
                : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {tab}
          </Link>
        ))}
      </div>

      </div>
      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 flex-3 rounded-lg shadow-sm p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;