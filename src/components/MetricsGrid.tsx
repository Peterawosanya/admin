import React from 'react';
import { MetricCard } from './MetricCard';
import { 
  Users, 
  DollarSign, 
  FolderOpen, 
  Heart, 
  Clock, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';

const metrics = [
  {
    title: 'Total Users',
    value: '24,521',
    change: '+12.5%',
    trend: 'up' as 'up',
    icon: Users,
    color: 'blue' as 'blue',
  },
  {
    title: 'Amount Donated',
    value: '$2.4M',
    change: '+8.2%',
    trend: 'up' as 'up',
    icon: DollarSign,
    color: 'emerald' as 'emerald',
  },
  {
    title: 'Funded Projects',
    value: '142',
    change: '+4.3%',
    trend: 'up' as 'up',
    icon: FolderOpen,
    color: 'purple' as 'purple',
  },
  {
    title: 'Lives Impacted',
    value: '125K',
    change: '+15.7%',
    trend: 'up' as 'up',
    icon: Heart,
    color: 'red' as 'red',
  },
  {
    title: 'Ongoing Projects',
    value: '38',
    change: '-2.8%',
    trend: 'down' as 'down',
    icon: Clock,
    color: 'amber' as 'amber',
  },
  {
    title: 'Monthly Growth',
    value: '$358K',
    change: '+6.1%',
    trend: 'up' as 'up',
    icon: TrendingUp,
    color: 'indigo' as 'indigo',
  },
  {
    title: 'Businesses (Verified/Unverified)',
    value: '320 / 45',
    change: '+5.0%',
    trend: 'up' as 'up',
    icon: Briefcase,
    color: 'blue' as 'blue',
  },
];

export const MetricsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};