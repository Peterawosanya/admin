import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Activity {
  id: number;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  activity: string;
  amount: string;
  project: string;
  date: string;
  status: 'completed' | 'pending' | 'active';
}

const activities: Activity[] = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    activity: 'Donation',
    amount: '$2,500',
    project: 'Clean Water Initiative',
    date: 'June 8, 2025',
    status: 'completed',
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      email: 'm.chen@example.com',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    activity: 'Business Verification',
    amount: '-',
    project: '-',
    date: 'June 7, 2025',
    status: 'pending',
  },
  {
    id: 3,
    user: {
      name: 'David Wilson',
      email: 'd.wilson@example.com',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    activity: 'Project Creation',
    amount: '$10,000 (Goal)',
    project: 'Education for All',
    date: 'June 6, 2025',
    status: 'active',
  },
  {
    id: 4,
    user: {
      name: 'Emily Rodriguez',
      email: 'e.rodriguez@example.com',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    activity: 'Donation',
    amount: '$1,000',
    project: 'Reforestation Project',
    date: 'June 5, 2025',
    status: 'completed',
  },
  {
    id: 5,
    user: {
      name: 'Jessica Lee',
      email: 'j.lee@example.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    activity: 'Project Completion',
    amount: '$15,000 (Raised)',
    project: 'Community Health Center',
    date: 'June 4, 2025',
    status: 'completed',
  },
];

const statusStyles = {
  completed: 'bg-emerald-100 text-emerald-800',
  pending: 'bg-amber-100 text-amber-800',
  active: 'bg-blue-100 text-blue-800',
};

export const RecentActivity: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  return (
    <div className="bg-white rounded-xl border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-sm text-gray-600 mt-1">Latest user interactions and transactions</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Activity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={activity.user.avatar}
                      alt={activity.user.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {activity.user.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {activity.user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{activity.activity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{activity.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{activity.project}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {activity.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      statusStyles[activity.status]
                    }`}
                  >
                    {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {activities.length} of 24 entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};