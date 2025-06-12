import React, { useState } from 'react';
import { DonationTrendsChart } from './DonationTrendsChart';
import { DonationDistributionChart } from './DonationDistributionChart';

export const ChartsSection: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <DonationTrendsChart timeRange={timeRange} onTimeRangeChange={setTimeRange} />
      <DonationDistributionChart />
    </div>
  );
};