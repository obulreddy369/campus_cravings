import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const OrderPage = () => {
  const { backendUrl, setAllOrders, allOrders } = useContext(AppContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/user/orders`, {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        if (data.success) {
          setAllOrders(data.orders);
        } else {
          setAllOrders([]);
        }
      } catch (err) {
        setAllOrders([]);
      }
    };

    fetchOrders();
  }, [backendUrl, setAllOrders]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Orders</h2>

      {allOrders.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No orders found.</p>
      ) : (
        allOrders.map((order, index) => (
          <div
            key={order._id || index}
            className="border rounded-lg shadow-md p-6 mb-6 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-lg text-gray-900">Order #{index + 1}</p>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.status === "Preparing"
                    ? "bg-blue-100 text-blue-700"
                    : order.status === "Out for Delivery"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            <p className="mb-4 text-gray-700 font-medium">
              Total: <span className="text-lg text-gray-900">₹{order.totalAmount}</span>
            </p>

            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.foodItemId?._id} className="flex items-center gap-4">
                  <img
                    src={item.foodItemId?.image}
                    alt={item.foodItemId?.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{item.foodItemId?.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: <span className="font-medium">{item.quantity}</span> × ₹
                      {item.foodItemId?.price}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold mt-1">
                      Subtotal: ₹{(item.quantity * item.foodItemId?.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
