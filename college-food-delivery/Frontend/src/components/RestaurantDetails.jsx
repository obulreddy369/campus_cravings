import React from 'react';
import { useParams } from 'react-router-dom';
import {restaurentsData} from "../assets/assets.js";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = restaurentsData.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return <div className="text-center py-10 text-red-600">Restaurant not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{restaurant.name}</h2>
        <p className="text-gray-600">{restaurant.address}</p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Available Foods</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        console.log('Foods:', restaurant.foods);
        {restaurant.foods.map((food, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">{food.name}</h4>
            <p className="text-gray-700 mb-1">{food.description}</p>
            <div className="text-sm text-gray-500 mb-1">
              Category: {food.category} | Tags: {food.tags.join(', ')}
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold text-lg">${food.price}</span>
              <span className="text-yellow-600"> {food.rating} ({food.reviews} reviews)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
