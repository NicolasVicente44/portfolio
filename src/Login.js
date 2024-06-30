import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Import auth from firebase.js
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = ({ onLoginSuccess, theme }) => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setError(null);
      onLoginSuccess(userCredential.user);
      navigate("/blog");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full max-w-md p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Log In</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className={`group mx-auto my-auto text-center justify-center border-2 px-4 sm:px-6 py-2 sm:py-3 lg:w-1/2 sm:w-1/4 flex items-center cursor-pointer transition duration-300 ${
              theme === "dark"
                ? "text-white hover:bg-white hover:text-black border-white"
                : "text-black hover:bg-black hover:text-white border-black"
            }`}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
