import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form className='w-full flex flex-col items-start'>
          <div className="mb-4 w-full flex flex-col items-start">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6 w-full flex flex-col items-start">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center w-full flex-col items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
