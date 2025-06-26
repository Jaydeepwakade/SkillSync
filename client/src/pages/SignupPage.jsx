 import React, { useState } from "react";
import { Link } from "react-router-dom";
function SignupPage() {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Matchpassword, setMatchPassword] = useState("");

  const onHandlesubmit = () => {
    console.log(name, email, password, Matchpassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="p-6">
        <h1 className="text-blue-600 font-bold text-3xl">SkillSync</h1>
      </div>
      <div className="flex flex-1  justify-center items-center relative ">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-[500px] z-10">
          <h2 className="text-xl font-bold text-center mb-6">
            Hello register here <span>👋</span>
          </h2>

          <label className="text-sm font-medium mb-1 block">Name</label>
          <div className="flex items-center bg-gray-100 rounded px-3 py-2 mb-4">
            <i className="fas fa-user text-gray-400 mr-2"></i>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-gray-100 outline-none w-full"
              placeholder="Enter your name"
            />
          </div>
          <label className=" text-sm font-medium mb-1 block">Email</label>
          <div className="flex  items-center bg-gray-100 rounded px-3 py-3 mb-4">
            <i className=" fas fa-envelope text-gray-400 mr-2"></i>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter you Email"
              className="outline-none bg-gray-100 w-full"
            />
          </div>
          <label className="text-sm font-medium mb-1 block"> Password</label>
          <div className="flex items-center bg-gray-100 rounded px-3 py-3 mb-4">
            <i className="fas fa-key text-gray-400 mr-2 "></i>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-gray-100 outline-none w-full"
            />
          </div>
          <label className="text-sm font-medium mb-1 block">
            {" "}
            confirm Password
          </label>
          <div className="flex items-center bg-gray-100 rounded px-3 py-3 mb-4">
            <i className="fas fa-key text-gray-400 mr-2 "></i>
            <input
              value={Matchpassword}
              onChange={(e) => setMatchPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="bg-gray-100 outline-none w-full"
            />
          </div>

          <button
            onClick={onHandlesubmit}
            className=" bg-blue-500 flex items-center justify-center w-full px-3 py-2 rounded text-2xl font-semibold text-white"
          >
            Register
          </button>
          <div className="flex items-center justify-center my-2 text-gray-400">
            <hr className="flex-grow border-t mr-2" />
            OR
            <hr className="flex-grow border-t ml-2" />
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Have an account ?{" "}
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline font-semibold"
            >
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
