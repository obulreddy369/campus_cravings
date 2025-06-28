import React, { useContext } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, backendUrl } = useContext(AppContext);

  const { cartItems = [], totalAmount = 0 } = location.state || {};

  const handlePlaceOrder = async () => {
    // Validate user
    if (!user || !user.email) {
      alert("Please log in to place an order.");
      navigate("/login");
      return;
    }

    // Validate cart items
    if (!Array.isArray(cartItems)) {
      alert("Invalid cart items. Please try again.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }

    // Prepare order items with validation
    const validItems = [];
    const invalidItems = [];

    cartItems.forEach((item) => {
      if (!item) return;

      const foodItemId = item._id || item.id;
      const quantity = Number(item.quantity) || 1;
      const price = Number(item.price) || 0;

      if (!foodItemId) {
        invalidItems.push(item.name || "Unknown item");
        return;
      }

      validItems.push({
        foodItemId,
        quantity,
        price
      });
    });

    if (invalidItems.length > 0) {
      alert(
        `Some items cannot be ordered:\n${invalidItems.join(
          "\n"
        )}\n\nPlease remove them and try again.`
      );
      return;
    }

    if (validItems.length === 0) {
      alert("No valid items to order. Please check your cart.");
      return;
    }

    // Calculate total amount if not provided
    const calculatedTotal = validItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const finalTotal = Number(totalAmount) || calculatedTotal;

    try {
      const orderData = {
        email: user.email,
        items: validItems,
        totalAmount: finalTotal,
      };

      // Place order in your MongoDB backend
      const response = await axios.post(
        `${backendUrl}/api/user/order`,
        orderData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        // Send order data to ServiceNow for each item (in parallel)
        const syncPromises = validItems.map((item) =>
          axios.post(
            `${backendUrl}/api/user/sync-orders`,
            {
              quantity: item.quantity.toString(),
              food_item_id: item.foodItemId,
              total_amount: finalTotal.toString(),
              user_id: user._id || user.id || "",
              order_id: response.data.order_id || "ORD_UNKNOWN", // use returned order id or fallback
              email: user.email,
              status: "Pending",
            },
            { withCredentials: true }
          )
        );

        await Promise.all(syncPromises);

        alert("Order placed successfully!");
        navigate("/my-profile/orders", { replace: true });
      } else {
        throw new Error(response.data.message || "Failed to place order");
      }
    } catch (error) {
      console.error("Order error:", error);
      alert(
        `Failed to place order: ${
          error.response?.data?.message ||
          error.message ||
          "Please try again later"
        }`
      );
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-20">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="py-4 text-gray-600">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item, index) => {
              if (!item) return null;

              const uniqueKey = item._id || item.id || `item-${index}`;
              const name = item.name || "Unknown item";
              const quantity = Number(item.quantity) || 1;
              const price = Number(item.price) || 0;

              return (
                <div key={uniqueKey} className="border-b py-2">
                  <h2 className="font-semibold">{name}</h2>
                  <p>Quantity: {quantity}</p>
                  <p>Price: ₹{price.toFixed(2)}</p>
                  <p>Subtotal: ₹{(price * quantity).toFixed(2)}</p>
                </div>
              );
            })}

            <div className="mt-4 text-xl font-bold">
              Total: ₹{Number(totalAmount).toFixed(2)}
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors disabled:bg-gray-400"
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
