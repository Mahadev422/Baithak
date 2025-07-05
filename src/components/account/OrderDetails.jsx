const OrderDetails = ({ order }) => {
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h4 className="sr-only">Items</h4>
      <ul className="space-y-4">
        {order.items.map((item, itemIdx) => (
          <li key={itemIdx} className="flex">
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500 ml-4">{item.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Quantity: {item.quantity}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="text-sm font-medium text-gray-900">
            Shipping information
          </h5>
          <div className="mt-2 text-sm text-gray-500">
            <p>Standard shipping</p>
            {order.tracking && (
              <p className="mt-1">
                Tracking: <span className="font-mono">{order.tracking}</span>
              </p>
            )}
            <p className="mt-1">
              {order.status === "Delivered"
                ? `Delivered on ${order.deliveryDate}`
                : `Estimated delivery: ${order.deliveryDate}`}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="text-sm font-medium text-gray-900">Order summary</h5>
          <div className="mt-2 text-sm text-gray-500">
            <div className="flex justify-between py-1">
              <span>Subtotal</span>
              <span>{order.total}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between py-1 border-t border-gray-200 mt-2 pt-2">
              <span className="font-medium">Total</span>
              <span className="font-medium">{order.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
