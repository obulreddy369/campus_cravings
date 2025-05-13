import React from "react";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import FoodPage from "./pages/FoodPage";
import Restaurants from "./pages/Restaurents";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyProfile from "./pages/MyProfile";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import FoodDetails from "./components/FoodDetails";
import Login from "./pages/Login";
import RestaurantDetails from "./components/RestaurantDetails";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-orange-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fooditems" element={<FoodPage />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="my-profile" element={<MyProfile />}>
          <Route path="/my-profile" element={<Profile />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
