import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: 'blue' | 'emerald' | 'purple' | 'red' | 'amber' | 'indigo';
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 dark:bg-[#232f4b] dark:text-blue-400',
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-[#1e3a2a] dark:text-emerald-400',
  purple: 'bg-purple-50 text-purple-600 dark:bg-[#2e224b] dark:text-purple-400',
  red: 'bg-red-50 text-red-600 dark:bg-[#4b2323] dark:text-red-400',
  amber: 'bg-amber-50 text-amber-600 dark:bg-[#4b3a23] dark:text-amber-400',
  indigo: 'bg-indigo-50 text-indigo-600 dark:bg-[#23244b] dark:text-indigo-400',
};

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
}) => {
  return (
    <div className="bg-white dark:bg-darkcard rounded-xl p-6 border border-gray-100 dark:border-[#2d2d36] hover:shadow-lg transition-all duration-200 hover:border-gray-200 dark:hover:border-[#3a3a44]">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center space-x-1 text-sm font-medium ${
          trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'
        }`}>
          {trend === 'up' ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-darktext mb-1">{value}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Since last month</p>
      </div>
    </div>
  );
};