import React, { useState } from "react";
import selection from "../assets/selection.png";
import rigthside from "../assets/rigthside.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'
function LoginPage() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = (e) => {
    console.log(email, Password);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <div className="p-6">
        <h1 className="text-blue-600 font-bold text-3xl">SkillSync</h1>
      </div>


      <div className="flex flex-1 justify-center items-center relative">
        {/* Left Side Image */}
        {/* <img
          src={rigthside}
          alt="left"
          className="absolute left-0 h-[70%] mt-97 object-contain"
        /> */}

        {/* Center Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10 w-[500px] z-10">
          <h2 className="text-xl font-bold text-center mb-6">
            Welcome back <span>👋</span>
          </h2>

          {/* Email */}
          <label className="text-sm font-medium mb-1 block">Email</label>
          <div className="flex items-center bg-gray-100 rounded px-3 py-2 mb-4">
            <i className="fas fa-envelope text-gray-400 mr-2"></i>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="bg-gray-100 outline-none w-full"
            />
          </div>

          {/* Password */}
          <label className="text-sm font-medium mb-1 block">Password</label>
          <div className="flex items-center bg-gray-100 rounded px-3 py-2 mb-2">
            <i className="fas fa-lock text-gray-400 mr-2"></i>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="bg-gray-100 outline-none w-full"
            />
            <i className="fas fa-eye text-gray-400 ml-2 cursor-pointer"></i>
          </div>

          {/* Options */}
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <label>
              <input type="checkbox" className="mr-1" />
              Keep me logged in
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded mb-4"
          >
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-2 text-gray-400">
            <hr className="flex-grow border-t mr-2" />
            OR
            <hr className="flex-grow border-t ml-2" />
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="border rounded-full p-2 hover:bg-gray-200">
              <i className="fab fa-google text-red-500"></i>
            </button>
            <button className="border rounded-full p-2 hover:bg-gray-200">
              <i className="fab fa-github text-black"></i>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Not a member yet?{" "}
           <Link to="/signup"> <a href="#" className="text-blue-600 hover:underline font-semibold">
              Register now
            </a></Link>
          </p>
        </div>

        {/* Right Side Image */}
        {/* <img
          src={selection}
          alt="right"
          className="absolute right-0 h-[70%]  object-contain"
        /> */}
      </div>
    </div>
  );
}

export default LoginPage;
