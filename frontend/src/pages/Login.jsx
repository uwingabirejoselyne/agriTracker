import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome Farmer</h2>

        <form className="space-y-4">
  <div>
    <label className="block mb-1 text-gray-700 font-semibold">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>

  <div>
    <label className="block mb-1 text-gray-700 font-semibold">Password</label>
    <input
      type="password"
      placeholder="Enter your password"
      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>

  {/* Forgot Password */}
  <div className="text-right">
    <a href="#" className="text-sm text-green-600 hover:underline">
      Forgot password?
    </a>
  </div>

  <button
    type="submit"
    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
  >
    Login
  </button>

  {/* Don't have an account */}
  <div className="text-center mt-4">
    <p className="text-sm text-gray-600">
      Don't have an account?
      <a href="#" className="text-green-700 font-semibold hover:underline ml-1">
        Sign up
      </a>
    </p>
  </div>
</form>

      </div>
    </div>
  );
};

export default Login;
