import React from "react";
import {
  Users,
  DollarSign,
  UserPlus,
  Activity,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function DashboardHomePage() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+4.5%",
      trendUp: true,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      valueColor: "text-blue-900",
    },
    {
      title: "Revenue",
      value: "$56,789",
      change: "+12.3%",
      trendUp: true,
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      valueColor: "text-green-900",
    },
    {
      title: "New Signups",
      value: "87",
      change: "-3.2%",
      trendUp: false,
      icon: <UserPlus className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      valueColor: "text-purple-900",
    },
    {
      title: "Active Users",
      value: "894",
      change: "+1.8%",
      trendUp: true,
      icon: <Activity className="w-6 h-6 text-orange-600" />,
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      valueColor: "text-orange-900",
    },
    {
      title: "Pending Orders",
      value: "56",
      change: "-0.8%",
      trendUp: false,
      icon: <ShoppingCart className="w-6 h-6 text-teal-600" />,
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      valueColor: "text-teal-900",
    },
    {
      title: "Conversion Rate",
      value: "3.7%",
      change: "+0.5%",
      trendUp: true,
      icon: <TrendingUp className="w-6 h-6 text-pink-600" />,
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      valueColor: "text-pink-900",
    },
  ];

  const activities = [
    { id: 1, action: "New user registered", time: "2 mins ago" },
    { id: 2, action: "Order #1024 completed", time: "10 mins ago" },
    { id: 3, action: "Server backup completed", time: "1 hour ago" },
    { id: 4, action: "Revenue report generated", time: "2 hours ago" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Dashboard Overview</h2>
        <p className="text-slate-600 mt-1">
          Get insights into your platform’s performance and recent activities.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`${stat.bgColor} p-5 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition duration-300`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">{stat.icon}</div>
              <h3 className={`text-lg font-semibold ${stat.textColor}`}>
                {stat.title}
              </h3>
            </div>
            <p className={`text-3xl font-bold ${stat.valueColor}`}>{stat.value}</p>
            <div className="flex items-center gap-1 mt-2">
              {stat.trendUp ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.trendUp ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-slate-500">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activities</h3>
        <ul className="divide-y divide-slate-200">
          {activities.map((activity) => (
            <li key={activity.id} className="py-3 flex justify-between text-slate-600">
              <span>{activity.action}</span>
              <span className="text-sm text-slate-400">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
