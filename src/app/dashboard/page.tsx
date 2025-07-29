"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample data
const userGrowthData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 700 },
  { month: "Mar", users: 900 },
  { month: "Apr", users: 1200 },
  { month: "May", users: 1800 },
];

const revenueData = [
  { product: "A", revenue: 2400 },
  { product: "B", revenue: 1398 },
  { product: "C", revenue: 9800 },
  { product: "D", revenue: 3908 },
];

export default function DashboardPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen p-8 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="px-4 py-2 rounded-full border"
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Metrics Cards */}
      <section className="grid grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow bg-opacity-10 border border-gray-400">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl mt-2">3,214</p>
        </div>
        <div className="p-6 rounded-lg shadow bg-opacity-10 border border-gray-400">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-3xl mt-2">$52,130</p>
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-2">User Growth (Monthly)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#666" : "#ccc"} />
              <XAxis dataKey="month" stroke={isDark ? "#ccc" : "#333"} />
              <YAxis stroke={isDark ? "#ccc" : "#333"} />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-2">Revenue by Product</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#666" : "#ccc"} />
              <XAxis dataKey="product" stroke={isDark ? "#ccc" : "#333"} />
              <YAxis stroke={isDark ? "#ccc" : "#333"} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
}
