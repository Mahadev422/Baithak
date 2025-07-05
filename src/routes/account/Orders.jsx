import { useState } from "react";
import OrderDetails from "../../components/account/OrderDetails";

const dummyOrders = [
  {
    id: "ORD12345",
    date: "2024-06-01",
    status: "Delivered",
    total: "$49.99",
    items: [
      { name: "Wireless Headphones", quantity: 1, price: "$29.99" },
      { name: "Phone Case", quantity: 1, price: "$20.00" },
    ],
    tracking: "UPS-9345-2387-0943",
    deliveryDate: "2024-06-05",
  },
  {
    id: "ORD12346",
    date: "2024-05-28",
    status: "Shipped",
    total: "$19.99",
    items: [{ name: "USB-C Cable", quantity: 1, price: "$19.99" }],
    tracking: "FEDEX-7834-5623-8910",
    deliveryDate: "Estimated Jun 10",
  },
  {
    id: "ORD12347",
    date: "2024-05-20",
    status: "Processing",
    total: "$89.50",
    items: [
      { name: "Smart Watch", quantity: 1, price: "$79.99" },
      { name: "Screen Protector", quantity: 2, price: "$4.75 each" },
    ],
    tracking: null,
    deliveryDate: "Processing",
  },
];

const statusStyles = {
  Delivered: "bg-green-100 text-green-800",
  Shipped: "bg-blue-100 text-blue-800",
  Processing: "bg-yellow-100 text-yellow-800",
  Cancelled: "bg-red-100 text-red-800",
};

const Orders = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        {dummyOrders.length === 0 ? (
          <div className="p-8 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No orders
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              You haven't placed any orders yet.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {dummyOrders.map((order) => (
              <div key={order.id} className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium text-gray-900">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Placed on {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusStyles[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                    <button
                      onClick={() => toggleOrder(order.id)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      {expandedOrder === order.id
                        ? "Hide details"
                        : "View details"}
                    </button>
                  </div>
                </div>

                {expandedOrder === order.id && (
                 <OrderDetails order={order} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
