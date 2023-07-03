import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Reducers/authentication/authActions";

function SignUp() {
  const [userData, setUserData] = useState();
  const handlechange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  function onSignUp(){
    console.log(userData);
    dispatch(signup(userData));
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form className="w-full flex flex-col items-start">
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={handlechange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handlechange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 w-full flex flex-col items-start">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handlechange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center w-full flex-col items-center">
            <button
              type="submit"
              onClick={onSignUp}
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
          <div className="text-gray-700 text-center mt-4 w-full flex-col items-center">
            Already have an account?{" "}
            <a
              href="/Login"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
