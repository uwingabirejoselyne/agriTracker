import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/');
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex bg-green-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-10">🌿 AgriTracker</h2>
        <nav className="space-y-4 text-sm font-medium">
          <a href="#" className="block hover:underline">📊 Dashboard</a>
          <a href="#" className="block hover:underline">🌽 My Crops</a>
          <a href="#" className="block hover:underline">💰 Income</a>
          <a href="#" className="block hover:underline">📉 Expenses</a>
          <a href="#" className="block hover:underline">👤 Profile</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-green-600 text-white py-4 shadow-md px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Farmer Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, {user?.name || 'Farmer'}!</span>
            <button
              onClick={handleLogout}
              className="bg-white text-green-700 px-4 py-1 rounded-lg text-sm font-semibold hover:bg-green-100 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="px-6 py-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Crops</h3>
              <p className="text-gray-600">Track your crop status and inventory.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Orders</h3>
              <p className="text-gray-600">Manage customer orders and delivery.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Analytics</h3>
              <p className="text-gray-600">View sales and growth trends.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
