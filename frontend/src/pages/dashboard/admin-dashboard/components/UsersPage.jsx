import React, { useState } from "react";
import { MoreHorizontal, Search } from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Mostakem Hossain",
    email: "mostakem@example.com",
    role: "Admin",
    status: "Active",
    initials: "MH",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "User",
    status: "Active",
    initials: "NJ",
    color: "from-pink-400 to-red-400",
  },
  {
    id: 3,
    name: "Arif Chowdhury",
    email: "arif@example.com",
    role: "User",
    status: "Inactive",
    initials: "AC",
    color: "from-green-400 to-emerald-400",
  },
  {
    id: 4,
    name: "Fatima Rahman",
    email: "fatima@example.com",
    role: "Manager",
    status: "Active",
    initials: "FR",
    color: "from-purple-400 to-indigo-400",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [editUserId, setEditUserId] = useState(null);
  const [editRole, setEditRole] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [deleteUserId, setDeleteUserId] = useState(null);

  const startEdit = (user) => {
    setEditUserId(user.id);
    setEditRole(user.role);
    setEditStatus(user.status);
  };

  const cancelEdit = () => {
    setEditUserId(null);
  };

  const saveEdit = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, role: editRole, status: editStatus } : user
      )
    );
    setEditUserId(null);
  };

  const openDeleteModal = (id) => {
    setDeleteUserId(id);
  };

  const closeDeleteModal = () => {
    setDeleteUserId(null);
  };

  const confirmDelete = () => {
    setUsers((prev) => prev.filter((user) => user.id !== deleteUserId));
    setDeleteUserId(null);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
            <p className="text-gray-600">
              Manage your application users and their permissions
            </p>
          </div>
          {/* Removed Add User button */}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option>All Roles</option>
              <option>Admin</option>
            
              <option>User</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

      
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    User
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Role
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${user.color} rounded-full flex items-center justify-center`}
                        >
                          <span className="text-sm font-semibold text-white">
                            {user.initials}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {editUserId === user.id ? (
                        <select
                          value={editRole}
                          onChange={(e) => setEditRole(e.target.value)}
                          className="px-3 py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                          <option>Admin</option>
                         
                          <option>User</option>
                        </select>
                      ) : (
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            user.role === "Admin"
                              ? "bg-purple-100 text-purple-700"
                              : user.role === "Manager"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {user.role}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {editUserId === user.id ? (
                        <select
                          value={editStatus}
                          onChange={(e) => setEditStatus(e.target.value)}
                          className="px-3 py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      ) : (
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 flex gap-2">
                      {editUserId === user.id ? (
                        <>
                          <button
                            onClick={() => saveEdit(user.id)}
                            className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(user)}
                            className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => openDeleteModal(user.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {deleteUserId !== null && (
  <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
      <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
      <p className="mb-6">
        Are you sure you want to delete this user? This action cannot be undone.
      </p>
      <div className="flex justify-end gap-4">
        <button
          onClick={closeDeleteModal}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={confirmDelete}
          className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
}
