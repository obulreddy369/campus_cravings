import React, { useContext, useState } from "react";
import { Mail, Lock, X } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
        if (data.success) {
          toast.success(data.message);
          setToken(data.token);       // ✅ Token stored in context
          setUser(data.user);         // ✅ User stored in context
          setShowLogin(false);
          navigate("/");              // ✅ Redirect after login
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          username,
          email,
          phone,
          password,
        });
        if (data.success) {
          toast.success(data.message);
          navigate("/");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="absolute w-full h-screen bg-black bg-opacity-70 z-50 flex items-center justify-center">
      
      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{state}</h2>
          <X className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        {state === "Sign Up" && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-3 px-4 py-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-3 px-4 py-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-3 px-4 py-2 border rounded"
              required
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {state === "Login" ? "Login" : "Register"}
        </button>

        <p className="mt-4 text-sm text-center">
          {state === "Login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
            className="text-blue-600 cursor-pointer underline"
          >
            {state === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
