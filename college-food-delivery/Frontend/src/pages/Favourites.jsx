import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { foodData } from "../assets/assets";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FavouritesPage() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favItems = foodData.filter((item) => storedFavorites.includes(item.id));
    setFavorites(favItems);
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Favourites</h1>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/food/${item.id}`)}
                className="bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-t-xl"
                />
                <div className="p-2">
                  <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                  <p className="text-xs text-gray-600 truncate">{item.restaurant}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm font-semibold">${item.price}</span>
                    <div className="flex items-center text-xs gap-1 text-yellow-500">
                      <Star className="w-4 h-4" />
                      {item.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg">No favorites added yet.</p>
        )}
      </div>
    </>
  );
}

export default FavouritesPage;
