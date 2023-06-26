import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    // fixed top-0 left-0 right-0
    <div className=" bg-gray-800">
      <div className="container w-screen mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <ul className="flex space-x-10 ml-10">
            <Link to="/">  <li  className="cursor-pointer text-gray-300 hover:text-white">Logo</li> </Link>
            <Link to="/Contest"> <li className="cursor-pointer text-gray-300 hover:text-white">Contest</li> </Link>
            <Link to="/Problem"> <li className="cursor-pointer text-gray-300 hover:text-white">Problems</li> </Link>
            <Link to="/Topics"> <li className="cursor-pointer text-gray-300 hover:text-white">Topics</li> </Link>
            <Link to="/Blogs"> <li className="cursor-pointer text-gray-300 hover:text-white">Blogs</li> </Link>
            <Link to="/Profile"> <li className="cursor-pointer text-gray-300 hover:text-white">Profile</li> </Link>
            </ul>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-10 mr-10">
            <Link to="/Login"> <li className="cursor-pointer text-gray-300 hover:text-white">Login</li> </Link>
            <Link to="/SignUp"> <li className="cursor-pointer text-gray-300 hover:text-white">Sign up</li> </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
