import logout from "./logout.png";
import favourites from "./favourites.png";
import food from "./food.png";
import orders from "./orders.png";
import profile from "./profile.png";
import campus_cravings from "./campus_cravings.png";
import back1 from "./parallax/mexican-food-composition.jpg";
import grp_bg from "./parallax/mexican-food-composition.jpg";
import ghibli from "./parallax/my_ghibli_image.jpg";

export const assets = {
  logout,
  favourites,
  food,
  orders,
  profile,
  campus_cravings,
  back1,
  grp_bg,
  ghibli,
};

export const AllOrders = [
  {
    id: 1,
    restaurantName: "Italian Delights",
    orderDate: "2024-03-15T18:30:00",
    orderStatus: "Delivered",
    orderType: "Delivery",
    payment: "Paid",
    deliveredTime: "2024-03-15T18:45:00",
    items: [
      {
        id: 11,
        foodName: "Margherita Pizza",
        quantity: "2",
        price: "330",
        onions: "yes",
        rating: 0,
        image:
          "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=60",
      },
      {
        id: 12,

        foodName: "Chicken Burger",
        quantity: "1",
        price: "100",
        onions: "no",
        rating: 0,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
      },
      {
        id: 13,
        foodName: "Sushi Roll Set",
        quantity: "2",
        price: "200",
        onions: "yes",
        rating: 0,
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
      },
      {
        id: 13,
        foodName: "Sushi Roll Set",
        quantity: "2",
        price: "200",
        onions: "yes",
        rating: 0,
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    restaurantName: "Burger House",
    orderDate: "2024-03-14T12:00:00",
    // orderStatus: "Delivered",
    orderType: "dineIn",
    payment: "On Spot",
    dineInTime: "2024-03-14T12:15:00",

    // deliveredTime: "2024-03-14T12:30:00",
    items: [
      {
        id: 21,
        foodName: "Chicken Burger",
        quantity: "1",
        price: "80",
        onions: "N/A",
        rating: 0,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    restaurantName: "Sushi Master",
    orderDate: "2024-03-13T19:15:00",
    orderStatus: "Processing",
    orderType: "Delivery",
    payment: "On Spot",
    deliveredTime: null,
    items: [
      {
        id: 31,
        foodName: "Sushi Roll Set",
        quantity: "2",
        price: "200",
        onions: "yes",
        rating: 0,
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
      },
    ],
  },
];

export const cartItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    quantity: 2,
    price: 350,
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Chicken Burger",
    quantity: 1,
    price: 250,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Caesar Salad",
    quantity: 1,
    price: 180,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Chicken Biryani",
    quantity: 1,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Chicken Biryani",
    quantity: 1,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2088&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Chicken Biryani",
    quantity: 1,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2088&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Chicken Biryani",
    quantity: 1,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2088&auto=format&fit=crop",
  },
];

export const restaurentsData =
[
  {
    "id": 1,
    "name": "The Rustic Table",
    "address": "123 Oak Street, Portland, OR 97201",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 2,
    "name": "Ocean's Edge",
    "address": "456 Pier Avenue, Seattle, WA 98101",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 3,
    "name": "Verde Kitchen",
    "address": "789 Garden Road, San Francisco, CA 94110",
    "image": "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 4,
    "name": "The Brick Oven",
    "address": "321 Main Street, Chicago, IL 60601",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 5,
    "name": "Sakura Japanese",
    "address": "567 Cherry Lane, New York, NY 10001",
    "image": "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 6,
    "name": "Mediterranean Nights",
    "address": "890 Olive Drive, Miami, FL 33101",
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 7,
    "name": "The Smokehaus",
    "address": "432 Maple Avenue, Austin, TX 78701",
    "image": "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 8,
    "name": "La Piazza",
    "address": "765 Roma Street, Boston, MA 02110",
    "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 9,
    "name": "The Golden Spoon",
    "address": "543 Market Street, Denver, CO 80202",
    "image": "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 10,
    "name": "Spice Route",
    "address": "876 Curry Lane, Las Vegas, NV 89101",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 11,
    "name": "Farm & Table",
    "address": "234 Country Road, Nashville, TN 37201",
    "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  },
  {
    "id": 12,
    "name": "Coastal Kitchen",
    "address": "987 Beach Boulevard, San Diego, CA 92101",
    "image": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    "foods": [
      {
        "name": "Special Fried Rice",
        "description": "Delicious rice stir-fried with vegetables and spices.",
        "price": 12.99,
        "rating": 4.6,
        "reviews": 90,
        "category": "rice",
        "tags": ["🍃 Veg", "🔥 Spicy"]
      },
      {
        "name": "Chicken Biryani",
        "description": "Traditional biryani with marinated chicken and basmati rice.",
        "price": 15.99,
        "rating": 4.8,
        "reviews": 140,
        "category": "rice",
        "tags": ["🍗 Nonveg", "🍛 Rich"]
      }
    ]
  }
]


export const foodData = [
  {
    id: "507f1f77bcf86cd799439011",
    name: "Hyderabadi Chicken Biryani",
    restaurant: "Biryani House",
    restaurantAddress: "123 Biryani Street, Hyderabad, India",
    description:
      "Savor authentic Hyderabadi Chicken Biryani with tender, spiced chicken layered with fragrant rice and garnished with crispy onions—a true taste of Hyderabad.",
    price: 15.99,
    rating: 4.9,
    reviews: 125,
    image:
      "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🔥 Spicy"]
  },
  {
    id: "507f191e810c19729de860ea",
    name: "Vegetable Fried Rice",
    restaurant: "Asian Wok",
    restaurantAddress: "456 Wok Avenue, Singapore",
    description:
      "Enjoy a vibrant mix of crisp vegetables and fluffy rice stir-fried with garlic and soy sauce for a light, healthy meal.",
    price: 12.5,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍃 Veg", "🧊 Light"]
  },
  {
    id: "5f7b2a1c4d8e9f3a2b1c4d9a",
    name: "Mutton Lucknowi Biryani",
    restaurant: "Royal Kitchen",
    restaurantAddress: "789 Royal Road, Lucknow, India",
    description:
      "Relish Lucknowi Biryani with tender mutton slow-cooked in rich spices and layered with aromatic rice, echoing royal traditions.",
    price: 18.99,
    rating: 4.8,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🍛 Rich"]
  },
  {
    id: "60a1b3c4e5f6789d12345678",
    name: "Schezwan Fried Rice",
    restaurant: "Dragon Express",
    restaurantAddress: "101 Dragon Blvd, Beijing, China",
    description:
      "Dive into Schezwan Fried Rice with bold, spicy flavors and a tangy kick from the signature sauce.",
    price: 13.5,
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🔥 Spicy"]
  },
  {
    id: "5e8c4d2a9b1f7c4e5d6a3b2f",
    name: "Kolkata Chicken Biryani",
    restaurant: "Bengal Flavors",
    restaurantAddress: "202 Bengal Street, Kolkata, India",
    description:
      "Enjoy Kolkata Chicken Biryani with succulent chicken and a traditional spice mix that reflects the city's street food heritage.",
    price: 16.99,
    rating: 4.8,
    reviews: 110,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🔥 Spicy"]
  },
  {
    id: "61b2c4d567e890f1a2b3c4d5",
    name: "Thai Basil Fried Rice",
    restaurant: "Thai Spice",
    restaurantAddress: "303 Spice Road, Bangkok, Thailand",
    description:
      "Savor Thai Basil Fried Rice where fresh basil infuses stir-fried rice and veggies with a subtle spicy-sweet balance.",
    price: 14.5,
    rating: 4.7,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🌿 Aromatic"]
  },
  {
    id: "5c9d5e6f7a1b2c3d4e5f6a78",
    name: "Egg Fried Rice",
    restaurant: "Wok Master",
    restaurantAddress: "404 Master Lane, Beijing, China",
    description:
      "A simple yet satisfying egg fried rice with fluffy rice, scrambled eggs, and fresh veggies—a perfect quick meal.",
    price: 11.99,
    rating: 4.5,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "⚡ Quick"]
  },
  {
    id: "62c3d5e678f901a2b3c4d5e6",
    name: "Awadhi Mutton Biryani",
    restaurant: "Nawabi Kitchen",
    restaurantAddress: "505 Nawab Circle, Lucknow, India",
    description:
      "Indulge in Awadhi Mutton Biryani with tender mutton, aromatic rice, and a delicate blend of spices that exude Nawabi elegance.",
    price: 19.99,
    rating: 4.9,
    reviews: 158,
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🍛 Rich"]
  },
  {
    id: "5a1e6f7890b2c3d4e5f6a789",
    name: "Kimchi Fried Rice",
    restaurant: "Seoul Kitchen",
    restaurantAddress: "606 Seoul Street, Seoul, South Korea",
    description:
      "Experience a fusion twist with Kimchi Fried Rice that pairs tangy kimchi with perfectly stir-fried rice for a bold, vibrant taste.",
    price: 13.99,
    rating: 4.6,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍃 Veg", "🍋 Tangy"]
  },
  {
    id: "63d4e6f7890a1b2c3d4e5f67",
    name: "Malabar Prawn Biryani",
    restaurant: "Coastal Flavors",
    restaurantAddress: "707 Coastal Drive, Mumbai, India",
    description:
      "Enjoy Malabar Prawn Biryani where succulent prawns and aromatic rice combine with coastal spices and a hint of coconut.",
    price: 20.99,
    rating: 4.8,
    reviews: 132,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🐟 Seafood"]
  },
  {
    id: "5b2f7a890b1c2d3e4f5a6789",
    name: "Pineapple Fried Rice",
    restaurant: "Thai Paradise",
    restaurantAddress: "808 Paradise Ave, Pattaya, Thailand",
    description:
      "Taste the tropical twist in Pineapple Fried Rice, where sweet pineapple and savory rice create a refreshing, balanced dish.",
    price: 14.99,
    rating: 4.7,
    reviews: 90,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍃 Veg", "🏝️ Tropical"]
  },
  {
    id: "64e5f7a890b1c2d3e4f5a678",
    name: "Calicut Chicken Biryani",
    restaurant: "Kerala Kitchen",
    restaurantAddress: "909 Kerala Road, Kochi, India",
    description:
      "Relish Calicut Chicken Biryani with tender chicken and South Indian spices layered with fragrant rice for a hearty meal.",
    price: 16.5,
    rating: 4.8,
    reviews: 115,
    image:
      "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🔥 Spicy"]
  },
  {
    id: "5c3a8b901c2d3e4f5a67890b",
    name: "Yangzhou Fried Rice",
    restaurant: "Chinese Palace",
    restaurantAddress: "111 Palace St, Beijing, China",
    description:
      "Delight in Yangzhou Fried Rice with a subtle blend of flavors, tender ingredients, and a light, savory finish honoring Chinese tradition.",
    price: 15.5,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🍄 Umami"]
  },
  {
    id: "65f6a8b901c2d3e4f5a6789c",
    name: "Sindhi Vegetable Biryani",
    restaurant: "Sindh House",
    restaurantAddress: "121 Sindh Road, Karachi, Pakistan",
    description:
      "Enjoy Sindhi Vegetable Biryani—a colorful mix of fresh vegetables, aromatic spices, and fluffy rice that creates a hearty vegetarian delight.",
    price: 14.99,
    rating: 4.6,
    reviews: 105,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍃 Veg", "🌿 Aromatic"]
  },
  {
    id: "5d4b9c012d3e4f5a67890bcd",
    name: "Nasi Goreng",
    restaurant: "Indonesian Delights",
    restaurantAddress: "131 Delight Street, Jakarta, Indonesia",
    description:
      "Discover the bold taste of Nasi Goreng—Indonesia's signature fried rice with a spicy, sweet, and savory medley that captivates the palate.",
    price: 13.99,
    rating: 4.8,
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    category: "rice",
    tags: ["🍗 Nonveg", "🔥 Spicy"]
  },
  {
    id: "66a7b9c012d3e4f5a67890de",
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    restaurantAddress: "141 Pizza Plaza, New York, USA",
    description:
      "Savor a classic Margherita Pizza with a thin, crispy crust topped with fresh tomatoes, mozzarella, and basil—a timeless Italian favorite.",
    price: 10.0,
    rating: 4.7,
    reviews: 134,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍃 Veg", "🧀 Cheesy"]
  },
  {
    id: "5e5c0d123e4f5a67890bcdef",
    name: "Veggie Supreme",
    restaurant: "Green Bites",
    restaurantAddress: "151 Green Street, San Francisco, USA",
    description:
      "Experience Veggie Supreme pizza loaded with a generous mix of fresh vegetables and zesty sauce on a crisp, golden base.",
    price: 4.5,
    rating: 4.8,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍃 Veg", "😋 Delicious"]
  },
  {
    id: "67b8c0d123e4f5a67890bcef",
    name: "Mozzarella Sticks",
    restaurant: "Cheese Delights",
    restaurantAddress: "161 Cheese Avenue, Wisconsin, USA",
    description:
      "Indulge in crispy, golden Mozzarella Sticks with a melty center, served hot with tangy marinara sauce for a satisfying snack.",
    price: 6.5,
    rating: 4.7,
    reviews: 73,
    image:
      "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍃 Veg", "🧀 Cheesy"]
  },
  {
    id: "5f6d1e234f5a67890bcdef01",
    name: "Burger Beef 'Anjaz'",
    restaurant: "Burger Boz",
    restaurantAddress: "171 Burger Lane, Chicago, USA",
    description:
      "Savor a hearty Burger Beef 'Anjaz' with a juicy beef patty, spicy seasoning, and robust toppings for a satisfying flavor punch.",
    price: 5.0,
    rating: 4.9,
    reviews: 102,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍗 Nonveg", "🍖 Savory"]
  },
  {
    id: "68c9d1e234f5a67890bcdef2",
    name: "Chicken Wings",
    restaurant: "Wing Zone",
    restaurantAddress: "181 Wing Road, Atlanta, USA",
    description:
      "Enjoy crispy, spicy Chicken Wings served with a cooling dip—perfectly balanced for a flavorful snack or meal.",
    price: 8.0,
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍗 Nonveg", "🔥 Spicy"]
  },
  {
    id: "5a7e2f345a67890bcdef0123",
    name: "BBQ Bacon",
    restaurant: "Smoke House",
    restaurantAddress: "191 Smoke Blvd, Los Angeles, USA",
    description:
      "Relish smoky BBQ Bacon served in a sandwich or as a side, with a perfect crunch and tangy flavor.",
    price: 7.0,
    rating: 4.9,
    reviews: 110,
    image:
      "https://images.unsplash.com/photo-1528607929212-2636ec44253e?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍗 Nonveg", "🔥 Smoky"]
  },
  {
    id: "69d0e2f345a67890bcdef234",
    name: "French Fries",
    restaurant: "Fry Heaven",
    restaurantAddress: "201 Fry Street, New York, USA",
    description:
      "Enjoy perfectly crispy French Fries that are golden and salted to perfection—an ideal side or snack.",
    price: 4.0,
    rating: 4.4,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍃 Veg", "🍟 Crispy"]
  },
  {
    id: "5b8f3a456b7890bcdef01234",
    name: "Double Stack",
    restaurant: "Stack House",
    restaurantAddress: "211 Stack Avenue, Boston, USA",
    description:
      "Delight in a Double Stack burger featuring two juicy patties, fresh toppings, and a signature sauce for an extra burst of flavor.",
    price: 7.5,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍗 Nonveg", "😋 Delicious"]
  },
  {
    id: "6ae1f4b567c890bcdef12345",
    name: "Pepperoni Pizza",
    restaurant: "Pizza Hut",
    restaurantAddress: "221 Pizza Road, Houston, USA",
    description:
      "Savor a classic Pepperoni Pizza with a crispy crust, spicy pepperoni, and melty mozzarella—a perfect blend of tangy and rich flavors.",
    price: 12.5,
    rating: 4.5,
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍗 Nonveg", "🔥 Spicy"]
  },
  {
    id: "5c9a5b678d901cdef0123456",
    name: "Classic Cheeseburger",
    restaurant: "Burger House",
    restaurantAddress: "231 Burger Avenue, Dallas, USA",
    description:
      "Relish a Classic Cheeseburger with a grilled beef patty, melted cheese, and fresh lettuce and tomato—a timeless comfort food.",
    price: 6.5,
    rating: 4.7,
    reviews: 105,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍗 Nonveg", "🍖 Savory"]
  },
  {
    id: "6bf2a6c789e012def1234567",
    name: "Nachos Supreme",
    restaurant: "Tex-Mex Grill",
    restaurantAddress: "241 Tex-Mex Blvd, Austin, USA",
    description:
      "Enjoy Nachos Supreme loaded with crispy tortilla chips, melted cheese, salsa, and vibrant toppings for a bold Tex-Mex snack experience.",
    price: 9.5,
    rating: 4.8,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍃 Veg", "😋 Delicious"]
  },
  {
    id: "5d0b7c8901f123ef456789ab",
    name: "Mushroom Swiss",
    restaurant: "Burger Joint",
    restaurantAddress: "251 Joint Street, Miami, USA",
    description:
      "Savor a Mushroom Swiss burger topped with sautéed mushrooms and melted Swiss cheese atop a juicy patty for an earthy, indulgent flavor.",
    price: 6.0,
    rating: 4.8,
    reviews: 82,
    image:
      "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?auto=format&fit=crop&w=800&q=80",
    category: "snacks",
    tags: ["🍃 Veg", "🧀 Cheesy"]
  },
  {
    id: "6ca8b7d901f234f56789abcd",
    name: "Oreo Milkshake",
    restaurant: "Shake Shack",
    restaurantAddress: "261 Shake Street, New York, USA",
    description:
      "Indulge in a creamy Oreo Milkshake where crushed Oreos blend with rich milk for a decadently sweet treat.",
    price: 6.99,
    rating: 4.8,
    reviews: 115,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍭 Sweet"]
  },
  {
    id: "5e1c8e9012a345g6789abcde",
    name: "Mango Lassi",
    restaurant: "Lassi Corner",
    restaurantAddress: "271 Lassi Lane, Mumbai, India",
    description:
      "Refresh with a Mango Lassi made from ripe mangoes and creamy yogurt—a tangy and cooling traditional drink.",
    price: 5.5,
    rating: 4.7,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "💧 Refreshing"]
  },
  {
    id: "6db9c0f123b456h789abcdef",
    name: "Classic Mojito",
    restaurant: "Mocktail Bar",
    restaurantAddress: "281 Mocktail Road, London, UK",
    description:
      "Savor a Classic Mojito with fresh mint, lime, and soda, offering a balanced mix of sweetness and citrus.",
    price: 7.99,
    rating: 4.9,
    reviews: 107,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "💧 Refreshing"]
  },
  {
    id: "5f2d0a1234c567i89abcdef0",
    name: "Strawberry Smoothie",
    restaurant: "Smoothie World",
    restaurantAddress: "291 Smoothie Ave, Los Angeles, USA",
    description:
      "Enjoy a Strawberry Smoothie made with fresh strawberries and yogurt, delivering a fruity, tangy, and refreshing burst in every sip.",
    price: 6.5,
    rating: 4.6,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍓 Fruity"]
  },
  {
    id: "6ec0b1f234d678j90abcdef1",
    name: "Chocolate Milkshake",
    restaurant: "Shake Haven",
    restaurantAddress: "301 Haven Street, Chicago, USA",
    description:
      "Delight in a rich Chocolate Milkshake blended with premium chocolate and creamy milk for a smooth, indulgent treat.",
    price: 6.99,
    rating: 4.8,
    reviews: 101,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍭 Sweet"]
  },
  {
    id: "5a3e1c2345e789k01abcdef2",
    name: "Blue Lagoon Mocktail",
    restaurant: "Ocean Breeze",
    restaurantAddress: "311 Ocean Drive, Miami, USA",
    description:
      "Refresh with a Blue Lagoon Mocktail that blends citrus and tropical fruits into a vibrant, invigorating beverage.",
    price: 8.5,
    rating: 4.7,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🏝️ Tropical"]
  },
  {
    id: "6fd1c2a345f890l12abcdef3",
    name: "Vanilla Bean Shake",
    restaurant: "Creamy Delights",
    restaurantAddress: "321 Creamy Road, San Francisco, USA",
    description:
      "Enjoy a smooth Vanilla Bean Shake bursting with real vanilla bean flavor blended with creamy milk for a luxuriously sweet beverage.",
    price: 5.99,
    rating: 4.5,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1528740096961-3798add19cb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhbiUyMHNoYWtlfGVufDB8fDB8fHww",
    category: "drinks",
    tags: ["🍃 Veg", "🥛 Creamy"]
  },
  {
    id: "5b4f2d3456a901m23abcdef4",
    name: "Virgin Piña Colada",
    restaurant: "Tropical Tastes",
    restaurantAddress: "331 Tropical Ave, Honolulu, USA",
    description:
      "Transport yourself with a Virgin Piña Colada where pineapple and coconut blend into a refreshing, non-alcoholic tropical drink.",
    price: 7.99,
    rating: 4.9,
    reviews: 93,
    image:
      "https://images.unsplash.com/photo-1619604395920-a16f33192a50?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🏝️ Tropical"]
  },
  {
    id: "70e2d3b456b012n34abcdef5",
    name: "Berry Blast Smoothie",
    restaurant: "Berry Bar",
    restaurantAddress: "341 Berry Lane, Portland, USA",
    description:
      "Refresh with a Berry Blast Smoothie made with mixed berries and yogurt for a tangy, sweet burst of flavor.",
    price: 6.99,
    rating: 4.6,
    reviews: 79,
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍓 Fruity"]
  },
  {
    id: "5c5a3e4567c123o45abcdef6",
    name: "Butterscotch Shake",
    restaurant: "Sweet Spot",
    restaurantAddress: "351 Sweet Street, Austin, USA",
    description:
      "Indulge in a rich Butterscotch Shake with deep caramel notes and a smooth, creamy texture—a decadent dessert drink.",
    price: 7.99,
    rating: 4.8,
    reviews: 83,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍭 Sweet"]
  },
  {
    id: "71f3e4c567d234p56abcdef7",
    name: "Mint Lemonade",
    restaurant: "Fresh & Cool",
    restaurantAddress: "361 Fresh Blvd, Vancouver, Canada",
    description:
      "Quench your thirst with a zesty Mint Lemonade where cool mint and freshly squeezed lemon juice come together for an invigorating, crisp drink.",
    price: 4.99,
    rating: 4.7,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "💧 Refreshing"]
  },
  {
    id: "5d6b4f5678e345q67abcdef8",
    name: "Cookie Cream Shake",
    restaurant: "Cookie Castle",
    restaurantAddress: "371 Cookie Road, New York, USA",
    description:
      "Treat yourself to a Cookie Cream Shake where crunchy cookie bits blend with creamy milk for a rich, indulgent dessert drink.",
    price: 6.5,
    rating: 4.8,
    reviews: 81,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍭 Sweet"]
  },
  {
    id: "72a4f5d678f456r78abcdef9",
    name: "Passion Fruit Mojito",
    restaurant: "Tropical Mix",
    restaurantAddress: "381 Tropical Street, Orlando, USA",
    description:
      "Refresh with a Passion Fruit Mojito that blends tropical passion fruit with mint and lime for a tangy, invigorating cocktail.",
    price: 7.5,
    rating: 4.7,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🏝️ Tropical"]
  },
  {
    id: "5e7c5a6789a567s89abcdef0",
    name: "Nutella Milkshake",
    restaurant: "Chocolate Haven",
    restaurantAddress: "391 Chocolate Ave, Paris, France",
    description:
      "Enjoy a luscious Nutella Milkshake blending rich Nutella with creamy milk for a velvety, decadent treat that delights every sweet tooth.",
    price: 7.99,
    rating: 4.9,
    reviews: 102,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍭 Sweet"]
  },
  {
    id: "73b5a6e789b678t90abcdef1",
    name: "Virgin Margarita",
    restaurant: "Mocktail Lounge",
    restaurantAddress: "401 Lounge Blvd, London, UK",
    description:
      "Refresh with a crisp Virgin Margarita that balances tangy citrus with subtle sweetness for a perfectly refreshing non-alcoholic cocktail.",
    price: 6.99,
    rating: 4.8,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["🍃 Veg", "🍊 Citrusy"]
  }
]