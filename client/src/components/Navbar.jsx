import React from "react";
import { NavLink,Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between p-6">
      <div className="flex items-center gap-12">
        <h1 className="text-blue-600 font-bold text-3xl">SkillSync</h1>
        <div className=" flex gap-12">
             <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-blue-500 text-[20px] " : "text-[20px]")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "text-blue-500 text-[20px]" : "text-[20px]")}
        >
          Jobs
        </NavLink>
        <NavLink
          to={"/companies"}
         className={({ isActive }) => (isActive ? "text-blue-500 text-[20px]" : "text-[20px]")}
        >
          Companies
        </NavLink>
        <NavLink
          to={"/aboutus"}
          className={({ isActive }) => (isActive ? "text-blue-500 text-[20px]" : "text-[20px]")}
        >
          About us
        </NavLink>
        </div>
      </div>

      <div className=" flex gap-4  items-center">
         <Link to="/login"> <button>Login</button></Link>
         <Link to= "/signup">        <button  className=" flex items-center rounded-md text-white bg-blue-600 p-5 h-10  ">Signup</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
