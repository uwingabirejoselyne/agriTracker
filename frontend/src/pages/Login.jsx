import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/dashboard'); // or wherever the farmer should go
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome Farmer</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {errorMsg && (
            <div className="text-red-600 text-sm font-semibold">{errorMsg}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center mt-4">
  <p className="text-sm text-gray-600">
    Don't have an account?
    <Link to="/signup" className="text-green-700 font-semibold hover:underline ml-1">
      Sign up
    </Link>
  </p>
</div>

        </form>
      </div>
    </div>
  );
};

export default Login;
