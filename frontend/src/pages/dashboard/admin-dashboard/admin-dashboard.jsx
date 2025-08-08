import React, { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiLogOut,
  FiMenu,
  FiX,
  FiBell,
  FiSearch,
  FiBook,
} from "react-icons/fi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const sidebarLinks = [
  { to: "/admin", label: "Dashboard", icon: <FiHome />, end: true },
  { to: "/admin/users", label: "Users", icon: <FiUsers /> },
  { to: "/admin/create-books", label: "Add Books", icon: <FiBook /> },
  { to: "/admin/analytics", label: "Analytics", icon: <FiBarChart2 /> },
  { to: "/admin/settings", label: "Settings", icon: <FiSettings /> },
  { to: "/logout", label: "Logout", icon: <FiLogOut />, isLogout: true },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    toast.success("Logout successful");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 to-slate-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
      >
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Readora
              </h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <FiX className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {sidebarLinks.map((link) =>
            link.isLogout ? (
              <button
                key={link.label}
                onClick={handleLogout}
                className="group flex w-full items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
              >
                <span className="text-lg text-slate-500 group-hover:text-slate-700 group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="font-semibold">{link.label}</span>
              </button>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`text-lg transition-transform duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 group-hover:text-slate-700"
                      } group-hover:scale-110`}
                    >
                      {link.icon}
                    </span>
                    <span className="font-semibold">{link.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full opacity-75" />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center font-bold text-white">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-900 truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-200/60 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <FiMenu className="w-6 h-6 text-slate-600" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                  <p className="text-sm text-slate-500 mt-1">Welcome back, Admin</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 bg-slate-100 rounded-xl px-4 py-2.5 min-w-0 max-w-sm">
                  <FiSearch className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400 flex-1 min-w-0"
                  />
                </div>

                <button className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-colors">
                  <FiBell className="w-5 h-5 text-slate-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                  <div className="hidden sm:block text-right">
                    <p className="font-semibold text-slate-900 text-sm">Admin User</p>
                    <p className="text-xs text-slate-500">Administrator</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white ring-2 ring-white shadow-lg">
                    A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
