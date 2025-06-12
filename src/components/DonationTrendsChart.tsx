import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface DonationTrendsChartProps {
  timeRange: 'weekly' | 'monthly';
  onTimeRangeChange: (range: 'weekly' | 'monthly') => void;
}

const weeklyData = [
  { name: 'Mon', donations: 10000, trend: 12000 },
  { name: 'Tue', donations: 15000, trend: 14000 },
  { name: 'Wed', donations: 12000, trend: 13000 },
  { name: 'Thu', donations: 18000, trend: 17000 },
  { name: 'Fri', donations: 20000, trend: 19000 },
  { name: 'Sat', donations: 15000, trend: 16000 },
  { name: 'Sun', donations: 22000, trend: 21000 },
];

const monthlyData = [
  { name: 'Jan', donations: 150000, trend: 160000 },
  { name: 'Feb', donations: 180000, trend: 170000 },
  { name: 'Mar', donations: 220000, trend: 210000 },
  { name: 'Apr', donations: 270000, trend: 250000 },
  { name: 'May', donations: 240000, trend: 230000 },
  { name: 'Jun', donations: 260000, trend: 250000 },
];

export const DonationTrendsChart: React.FC<DonationTrendsChartProps> = ({
  timeRange,
  onTimeRangeChange,
}) => {
  const data = timeRange === 'weekly' ? weeklyData : monthlyData;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Donation Trends</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onTimeRangeChange('weekly')}
            className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
              timeRange === 'weekly'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => onTimeRangeChange('monthly')}
            className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
              timeRange === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis 
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickLine={{ stroke: '#e2e8f0' }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: any) => [`$${value.toLocaleString()}`, '']}
          />
          <Legend />
          <Bar
            dataKey="donations"
            fill="#3b82f6"
            name="Donations"
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
          <Line
            type="monotone"
            dataKey="trend"
            stroke="#10b981"
            strokeWidth={3}
            name="Trend"
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};