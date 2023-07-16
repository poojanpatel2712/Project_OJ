import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../Reducers/authentication/authActions";
function Navbar() {
  const dispatch = useDispatch();
  function onLogOut() {
    dispatch(signout());
  }

  return (
    <div className=" bg-gray-800">
      <div className="container w-screen mx-auto px-4">
        <nav className="flex items-center justify-between h-28">
          <div className="flex items-center ml-8">
            <Link to="/">
              {" "}
              <img
                src={require("../images/Logo-removebg.png")}
                className="cursor-pointer w-52 h-20"
              />{" "}
            </Link>
            <ul className="flex space-x-10 ml-10">
              <Link to="/Contest">
                {" "}
                <li className="cursor-pointer test-500 text-gray-300 hover:text-white text-xl">
                  Contest
                </li>{" "}
              </Link>
              <Link to="/Problem">
                {" "}
                <li className="cursor-pointer text-gray-300 hover:text-white text-xl">
                  Problems
                </li>{" "}
              </Link>
              <Link to="/Topics">
                {" "}
                <li className="cursor-pointer text-gray-300 hover:text-white text-xl">
                  Topics
                </li>{" "}
              </Link>
              <Link to="/Blogs">
                {" "}
                <li className="cursor-pointer text-gray-300 hover:text-white text-xl">
                  Blogs
                </li>{" "}
              </Link>
            </ul>
          </div>
          <div className="flex items-center">
            {localStorage.getItem("jwt") ? (
              <ul className="flex flex-row">
                <Link to="/Profile">
                  {" "}
                  <li className="cursor-pointer mr-12 text-gray-300 hover:text-white text-xl">
                    Profile
                  </li>{" "}
                </Link>
                <li onClick={onLogOut} className="cursor-pointer mr-14 text-gray-300 hover:text-white text-xl">
                  Log Out
                </li>
              </ul>
            ) : (
              <ul className="flex space-x-10 mr-10">
                <Link to="/Login">
                  {" "}
                  <li className="cursor-pointer text-gray-300 hover:text-white text-xl">
                    Login
                  </li>{" "}
                </Link>
                <Link to="/SignUp">
                  {" "}
                  <li className="cursor-pointer text-gray-300 hover:text-white text-xl">
                    Sign up
                  </li>{" "}
                </Link>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
