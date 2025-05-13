import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { foodData } from "../assets/assets";
import {
  Search,
  SlidersHorizontal,
  Pizza,
  Cookie,
  Wine,
  Grid3X3,
  Star,
  Heart,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function FoodPage() {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("rice");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search");
    setSearchQuery(query ? query : "");
  }, [location.search]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(new Set(JSON.parse(storedFavorites)));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      localStorage.setItem("favorites", JSON.stringify([...newFavorites]));
      return newFavorites;
    });
  };

  const handleOnClick = (id) => {
    navigate(`/food/${id}`);
  };

  const addToCart = (id) => {
    const selectedFood = foodData.find((item) => item.id === id);
    if (selectedFood) {
      dispatch(addItem(selectedFood));
    }
  };

  const handleSearch = () => {
    navigate(`/fooditems?search=${encodeURIComponent(searchQuery.trim())}`);
  };

  const filteredFoodData = useMemo(() => {
    return searchQuery
      ? foodData.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : foodData.filter((item) =>
          selectedCategory === "all" ? true : item.category === selectedCategory
        );
  }, [searchQuery, selectedCategory]);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-[url('./assets/food-page-hero.jpg')] bg-cover bg-center text-gray-700 p-6 mt-10 min-h-[30vh] md:min-h-[50vh] lg:min-h-screen relative">
          <div className="max-w-md mx-auto md:max-w-4xl lg:max-w-6xl md:pt-20 lg:pt-40 lg:pl-10">
            <h1 className="absolute bottom-8 left-5 text-3xl md:static md:text-5xl lg:text-6xl font-bold mb-2">
              Taste the
              <br />
              Campus Vibe
            </h1>
          </div>
          <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 px-4 md:static md:translate-y-0 md:px-0 lg:mt-8 lg:pl-10 lg:relative">
            <div className="flex items-center bg-white rounded-full shadow-lg p-3 md:p-4 max-w-md md:max-w-sm mx-auto md:mx-0 lg:min-w-1/2 lg:h-14">
              <Search className="text-gray-400 w-5 h-5 md:w-6 md:h-6 ml-2" />
              <input
                type="text"
                placeholder="Search food, restaurant, etc"
                className="flex-1 ml-2 outline-none text-gray-700 md:text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button className="p-2" onClick={handleSearch}>
                <SlidersHorizontal className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Rice", icon: Pizza, category: "rice" },
              { label: "Snacks", icon: Cookie, category: "snacks" },
              { label: "Drinks", icon: Wine, category: "drinks" },
              { label: "More", icon: Grid3X3, category: "all" },
            ].map(({ label, icon: Icon, category }) => (
              <button
                key={label}
                onClick={() => setSelectedCategory(category)}
                className={`flex flex-col items-center group transition-transform cursor-pointer ${
                  selectedCategory === category ? "scale-110" : "scale-100"
                }`}
              >
                <div className="bg-red-100 text-red-600 p-4 md:p-5 rounded-2xl mb-1 group-hover:shadow-md">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span
                  className={`text-sm md:text-base ${
                    selectedCategory === category
                      ? "font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        <div className="px-4 mt-8 md:mt-12 lg:mt-16 pb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Food Items
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredFoodData.length > 0 ? (
              filteredFoodData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOnClick(item.id)}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-t-xl"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                      className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.has(item.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                    <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-xs flex items-center gap-1">
                      <Star className="w-3 h-3 fill-red-500 text-red-500" />
                      {item.rating}
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold text-sm truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600 truncate">
                      {item.restaurant}
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-semibold text-sm">
                        ${item.price.toFixed(1)}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item.id);
                        }}
                        className="text-xs bg-red-100 text-red-600 border border-red-600 px-2 py-1 rounded hover:bg-red-600 hover:text-white"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500 text-lg">
                No food items found
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodPage;
