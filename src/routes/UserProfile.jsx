import React, { useState, useEffect } from 'react';

// Mock user and order data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 890',
  address: '123 Main St, Springfield, USA',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s',
};

const mockOrders = [
  {
    id: 'ORD123',
    date: '2024-06-01',
    status: 'Delivered',
    total: '$120.00',
    items: [
      { name: 'Product A', qty: 1, image: 'https://via.placeholder.com/50' },
      { name: 'Product B', qty: 2, image: 'https://via.placeholder.com/50' },
    ],
  },
  {
    id: 'ORD124',
    date: '2024-05-15',
    status: 'Shipped',
    total: '$80.00',
    items: [
      { name: 'Product C', qty: 1, image: 'https://via.placeholder.com/50' },
    ],
  },
];

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Replace with real API calls
    setUser(mockUser);
    setOrders(mockOrders);
  }, []);

  if (!user) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
      {/* User Profile Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-shrink-0 items-center">
          <img 
            src={user.image} 
            alt={user.name} 
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">Address:</span> {user.address}</p>
          </div>
        </div>
      </div>

      {/* Order History Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Order History</h3>
        
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Order #{order.id}</h4>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h5 className="font-medium mb-3">Items ({order.items.length})</h5>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.name} className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4 flex justify-end">
                  <p className="font-semibold text-gray-900">Total: {order.total}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;