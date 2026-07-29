import StatsCard from "../../components/admin/statscard.jsx";
import products from "../../data/adminproducts.js";
import adminUsers from "../../data/adminusers.js";
import categoriesData from "../../data/categoriesdata.js";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 6400 },
];

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Admin!</h1>
        <p className="text-sm text-gray-500">Here's what's happening with your store.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard title="Total Products" value={products.length} />
        <StatsCard title="Total Categories" value={categoriesData.length} />
        <StatsCard title="Total Users" value={adminUsers.length} />
        <StatsCard title="Revenue" value="$24,500" />
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold text-gray-800 mb-4">Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}