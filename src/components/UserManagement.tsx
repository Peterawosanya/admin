import React, { useState } from 'react';

// Dummy user data
const dummyUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    status: 'Active',
    joined: '2023-01-15',
    lastLogin: '2024-06-01',
    phone: '+1 555-1234',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'User',
    status: 'Suspended',
    joined: '2023-03-22',
    lastLogin: '2024-05-28',
    phone: '+1 555-5678',
  },
  {
    id: 3,
    name: 'Carol Lee',
    email: 'carol@example.com',
    role: 'Manager',
    status: 'Active',
    joined: '2023-07-10',
    lastLogin: '2024-06-02',
    phone: '+1 555-8765',
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'david@example.com',
    role: 'User',
    status: 'Pending',
    joined: '2024-01-05',
    lastLogin: '2024-06-03',
    phone: '+1 555-4321',
  },
];

const roles = ['All', 'Admin', 'Manager', 'User'];
const statuses = ['All', 'Active', 'Pending', 'Suspended'];

export const UserManagement: React.FC = () => {
  const [users] = useState(dummyUsers);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [showAddUser, setShowAddUser] = useState(false);

  // Filtered users
  const filteredUsers = users.filter(user =>
    (roleFilter === 'All' || user.role === roleFilter) &&
    (statusFilter === 'All' || user.status === statusFilter) &&
    (user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
  );

  // Add user handler (dummy)
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    // Add user logic here
    setShowAddUser(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-darktext">User Management</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          onClick={() => setShowAddUser(true)}
        >
          + Add User
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="px-3 py-2 border rounded-lg"
          value={roleFilter}
          onChange={e => setRoleFilter(e.target.value)}
        >
          {roles.map(role => <option key={role}>{role}</option>)}
        </select>
        <select
          className="px-3 py-2 border rounded-lg"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          {statuses.map(status => <option key={status}>{status}</option>)}
        </select>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-darkcard text-gray-900 dark:text-darktext rounded-xl shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Role</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Joined</th>
              <th className="py-2 pr-4">Last Login</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b last:border-0 hover:bg-blue-50 cursor-pointer">
                <td className="py-2 pr-4 font-medium" onClick={() => setSelectedUser(user)}>{user.name}</td>
                <td className="py-2 pr-4">{user.email}</td>
                <td className="py-2 pr-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${user.role === 'Admin' ? 'bg-blue-100 text-blue-700' : user.role === 'Manager' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'}`}>{user.role}</span>
                </td>
                <td className="py-2 pr-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{user.status}</span>
                </td>
                <td className="py-2 pr-4">{user.joined}</td>
                <td className="py-2 pr-4">{user.lastLogin}</td>
                <td className="py-2 flex gap-2">
                  <button className="text-blue-600 hover:underline" onClick={() => setSelectedUser(user)}>View</button>
                  <button className="text-gray-600 hover:underline" onClick={() => setSelectedUser(user)}>Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredUsers.length === 0 && <div className="text-center text-gray-400 py-8">No users found.</div>}
      </div>

      {/* User Details Modal/Drawer */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkcard text-gray-900 dark:text-darktext rounded-xl shadow-xl p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setSelectedUser(null)}>&times;</button>
            <h2 className="text-xl font-bold mb-2">User Details</h2>
            <div className="mb-4">
              <div className="font-semibold">Name:</div>
              <div>{selectedUser.name}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Email:</div>
              <div>{selectedUser.email}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Phone:</div>
              <div>{selectedUser.phone}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Role:</div>
              <div>{selectedUser.role}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Status:</div>
              <div>{selectedUser.status}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Joined:</div>
              <div>{selectedUser.joined}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Last Login:</div>
              <div>{selectedUser.lastLogin}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Suspend</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Reset Password</button>
            </div>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white theme-grey:bg-greycard text-gray-900 theme-grey:text-greytext rounded-xl shadow-xl p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setShowAddUser(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <form onSubmit={handleAddUser} className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border rounded px-3 py-2" required />
              <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" required />
              <input type="tel" placeholder="Phone" className="w-full border rounded px-3 py-2" />
              <select className="w-full border rounded px-3 py-2" required>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add User</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}; 