import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="123 Main St, City"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="9876543210"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
