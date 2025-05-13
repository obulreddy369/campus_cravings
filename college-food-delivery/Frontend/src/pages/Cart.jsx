import React from "react";
import { Minus, Plus, Trash2,ShoppingCart} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, incrementQty, decrementQty } from "../utils/cartSlice";
import Navbar from "../components/Navbar";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryCharge = 20;
  const total = subtotal + deliveryCharge;

  return (
    <div>
      <Navbar/>
    <div className="pt-20 mt-3">

      <div className="w-[80%] mx-auto flex flex-col gap-3">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-6 border border-[#ddd] rounded-lg shadow-md p-4 bg-[#f9fafb]"
          >
            <img
              src={item.image}
              className="w-full sm:w-48 h-40 rounded-md"
            />

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-1">
                  Unit Price: ₹{item.price.toFixed(2)}
                </p>
                <p className="text-gray-800 font-medium mt-1">
                  Total: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button
                  className="p-2 border border-gray-300 rounded hover:bg-gray-200 bg-red-400"
                  onClick={() => dispatch(decrementQty(item.id))}
                >
                  <Minus className="w-4 h-4 " />
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  className="p-2 border border-gray-300 rounded hover:bg-gray-200 bg-green-400"
                  onClick={() => dispatch(incrementQty(item.id))}
                >
                  <Plus className="w-4 h-4 " />
                </button>
                <button
                  className="ml-auto text-red-600 hover:text-red-700"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>
      {/* Summary Section */}
      <div className="max-w-[80%] mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery</span>
          <span>₹{deliveryCharge.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-3">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-6 bg-[#111827] text-white py-3 rounded-md hover:bg-[#374151] transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
