import React, { useState, useContext, useEffect } from "react";
import { Edit2 } from "lucide-react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Profile = () => {
  const { backendUrl, token, user } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    if (user) {
      setProfile({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("You must be logged in to update the profile!");
      return;
    }
    try {
      console.log("API URL:", `${backendUrl}/api/user/profile/update`);
      console.log("Headers:", {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
      console.log("Payload:", profile);

      const res = await axios.put(
        `${backendUrl}/api/user/profile/update`,
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert("Profile updated successfully!");
        setIsEditing(false);
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please log in again.");
      } else {
        console.error("Profile update error:", error);
        alert("An error occurred while updating the profile.");
      }
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-[10px] shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center text-[#1f2937] mb-4">
            {isEditing ? "Edit Profile" : "Your Profile"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border rounded-md shadow-sm"
                  required
                />
              ) : (
                <div className="bg-gray-50 py-2 px-3 border rounded-md">
                  {profile.name}
                </div>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border rounded-md shadow-sm"
                  required
                />
              ) : (
                <div className="bg-gray-50 py-2 px-3 border rounded-md">
                  {profile.username}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border rounded-md shadow-sm"
                  required
                />
              ) : (
                <div className="bg-gray-50 py-2 px-3 border rounded-md">
                  {profile.email}
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border rounded-md shadow-sm"
                  required
                />
              ) : (
                <div className="bg-gray-50 py-2 px-3 border rounded-md">
                  {profile.phone}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4">
              {isEditing ? (
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-full py-2 px-4 rounded-md bg-gray-500 text-white hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="w-full flex gap-2 justify-center items-center py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
