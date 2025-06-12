import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Download } from 'lucide-react';

const data = [
  { name: 'Education', value: 1048, color: '#3b82f6' },
  { name: 'Healthcare', value: 735, color: '#10b981' },
  { name: 'Environment', value: 580, color: '#f59e0b' },
  { name: 'Disaster Relief', value: 484, color: '#ef4444' },
  { name: 'Poverty', value: 300, color: '#8b5cf6' },
];

export const DonationDistributionChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Donation Distribution</h3>
        <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: any) => [`${value.toLocaleString()} donations`, '']}
          />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="circle"
            wrapperStyle={{ paddingLeft: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};