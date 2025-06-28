import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 mb-6 bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold tracking-wide text-gray-800">
          Order ID: <span className="font-mono text-sm">{order._id.slice(-8)}</span>
        </h2>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
          order.status === "Delivered" ? "bg-green-100 text-green-700" :
          order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
          order.status === "Preparing" ? "bg-blue-100 text-blue-700" :
          order.status === "Out for Delivery" ? "bg-purple-100 text-purple-700" :
          "bg-red-100 text-red-700"
        }`}>
          {order.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-4 italic">
        Placed on: {order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A"}
      </p>

      <div className="space-y-3 mb-4">
        {order.items.map((item) => (
          <div key={item.foodItemId?._id} className="flex items-center gap-4 border rounded-md p-3 hover:bg-gray-50 transition-colors duration-200">
            <img
              src={item.foodItemId?.image}
              alt={item.foodItemId?.name}
              className="w-20 h-20 object-cover rounded-md shadow-sm"
            />
            <div>
              <p className="font-semibold text-gray-900">{item.foodItemId?.name}</p>
              <p className="text-sm text-gray-600">
                Quantity: <span className="font-medium">{item.quantity}</span> × ₹{item.foodItemId?.price}
              </p>
              <p className="text-sm text-gray-600 font-semibold mt-1">
                Subtotal: ₹{(item.quantity * item.foodItemId?.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right font-bold text-2xl text-gray-900 border-t pt-4">
        Total: ₹{order.totalAmount}
      </div>
    </div>
  );
};

export default OrderCard;
