import React, { useState } from 'react';
import { MetricsGrid } from './MetricsGrid';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, BarChart, Bar, AreaChart, Area } from 'recharts';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

// Dummy data for time range filter
const timeRanges = [
  { label: '7 Days', value: '7d' },
  { label: '30 Days', value: '30d' },
  { label: 'Year', value: '1y' },
];

// Dummy data for donation trends (over months)
const donationTrendsData = {
  '7d': [
    { date: 'Mon', amount: 50000 },
    { date: 'Tue', amount: 60000 },
    { date: 'Wed', amount: 70000 },
    { date: 'Thu', amount: 80000 },
    { date: 'Fri', amount: 90000 },
    { date: 'Sat', amount: 100000 },
    { date: 'Sun', amount: 110000 },
  ],
  '30d': Array.from({ length: 30 }, (_, i) => ({ date: `Day ${i + 1}`, amount: 50000 + i * 2000 })),
  '1y': [
    { date: 'Jan', amount: 200000 },
    { date: 'Feb', amount: 250000 },
    { date: 'Mar', amount: 300000 },
    { date: 'Apr', amount: 350000 },
    { date: 'May', amount: 400000 },
    { date: 'Jun', amount: 358000 },
    { date: 'Jul', amount: 370000 },
    { date: 'Aug', amount: 390000 },
    { date: 'Sep', amount: 410000 },
    { date: 'Oct', amount: 420000 },
    { date: 'Nov', amount: 430000 },
    { date: 'Dec', amount: 440000 },
  ],
};

// Dummy data for donation distribution
const donationDistribution = [
  { name: 'Education', value: 400000 },
  { name: 'Health', value: 250000 },
  { name: 'Environment', value: 150000 },
  { name: 'Community', value: 100000 },
];
const COLORS = ['#2563eb', '#10b981', '#a21caf', '#f59e42'];

// Dummy data for business verification
const businessVerification = [
  { name: 'Verified', value: 320 },
  { name: 'Unverified', value: 45 },
];
const BIZ_COLORS = ['#22c55e', '#f43f5e'];

// Dummy data for top donors
const topDonors = [
  { name: 'Alice', amount: 120000 },
  { name: 'Bob', amount: 95000 },
  { name: 'Charlie', amount: 87000 },
  { name: 'Diana', amount: 65000 },
  { name: 'Eve', amount: 54000 },
];

// Dummy data for top projects
const topProjects = [
  { name: 'Clean Water', amount: 180000 },
  { name: 'School Build', amount: 150000 },
  { name: 'Tree Planting', amount: 120000 },
  { name: 'Health Camp', amount: 90000 },
  { name: 'Food Drive', amount: 70000 },
];

// Dummy data for profit & loss
const profitLoss = [
  { month: 'Jan', income: 200000, expense: 120000 },
  { month: 'Feb', income: 250000, expense: 140000 },
  { month: 'Mar', income: 300000, expense: 180000 },
  { month: 'Apr', income: 350000, expense: 200000 },
  { month: 'May', income: 400000, expense: 220000 },
  { month: 'Jun', income: 358000, expense: 210000 },
];

// Dummy data for recurring vs one-time donations
const recurringVsOneTime = [
  { name: 'Recurring', value: 320000 },
  { name: 'One-Time', value: 480000 },
];
const DONATION_TYPE_COLORS = ['#6366f1', '#f59e42'];

// Dummy data for growth metrics
const growthMetrics = [
  { month: 'Jan', users: 1000, projects: 10, donations: 200000 },
  { month: 'Feb', users: 1200, projects: 12, donations: 250000 },
  { month: 'Mar', users: 1400, projects: 14, donations: 300000 },
  { month: 'Apr', users: 1600, projects: 16, donations: 350000 },
  { month: 'May', users: 1800, projects: 18, donations: 400000 },
  { month: 'Jun', users: 2000, projects: 20, donations: 358000 },
];

// Dummy average donation size
const avgDonation = 120;

// Dummy data for geographical distribution
const geoDistribution = [
  { country: 'USA', code: 'USA', value: 350000 },
  { country: 'GBR', code: 'GBR', value: 120000 },
  { country: 'IND', code: 'IND', value: 90000 },
  { country: 'DEU', code: 'DEU', value: 70000 },
  { country: 'NGA', code: 'NGA', value: 50000 },
  { country: 'BRA', code: 'BRA', value: 40000 },
];

// Map donation value to color
const maxValue = Math.max(...geoDistribution.map(d => d.value));
const colorScale = scaleLinear<string>()
  .domain([0, maxValue])
  .range(['#e0e7ff', '#2563eb']);

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

export const FinancialAnalytics: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<'7d' | '30d' | '1y'>('7d');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<string | null>(null);

  // Filter logic for charts (dummy: just highlight country)
  const handleCountryClick = (code: string) => {
    setSelectedCountry(code === selectedCountry ? null : code);
  };

  return (
    <div className="space-y-10">
      {/* Section: Metrics summary cards */}
      <section>
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-darktext">Financial Analytics Overview</h1>
        <MetricsGrid />
      </section>

      {/* Section: Donation Trends & Distribution */}
      <section className="bg-gray-50 dark:bg-darkcard rounded-2xl p-6 shadow-inner">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-300">Donation Trends:</span>
          {timeRanges.map(range => (
            <button
              key={range.value}
              className={`px-4 py-1 rounded-full border text-sm font-medium transition ${selectedRange === range.value ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'}`}
              onClick={() => setSelectedRange(range.value as '7d' | '30d' | '1y')}
            >
              {range.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donation Trends Line Chart */}
          <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Donation Trends</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={donationTrendsData[selectedRange]} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={v => `$${(v/1000).toLocaleString()}k`} />
                <Tooltip formatter={v => `$${v.toLocaleString()}`} />
                <Line type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Donation Distribution Pie Chart */}
          <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Donation Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={donationDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {donationDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={v => `$${v.toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Section: Top Donors & Projects */}
      <section className="bg-gray-50 dark:bg-darkcard rounded-2xl p-6 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Donors Bar Chart */}
          <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Top Donors</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={topDonors} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={v => `$${v.toLocaleString()}`} />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip formatter={v => `$${v.toLocaleString()}`} />
                <Bar dataKey="amount" fill="#2563eb" barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Projects by Funding Bar Chart */}
          <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Top Projects by Funding</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={topProjects} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={v => `$${v.toLocaleString()}`} />
                <Tooltip formatter={v => `$${v.toLocaleString()}`} />
                <Bar dataKey="amount" fill="#10b981" barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Section: Profit & Loss, Average Donation, Recurring vs One-Time */}
      <section className="bg-gray-50 dark:bg-darkcard rounded-2xl p-6 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profit & Loss Overview Area Chart */}
          <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Profit & Loss Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={profitLoss} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={v => `$${v.toLocaleString()}`} />
                <Tooltip formatter={v => `$${v.toLocaleString()}`} />
                <Area type="monotone" dataKey="income" stroke="#2563eb" fill="#2563eb22" name="Income" />
                <Area type="monotone" dataKey="expense" stroke="#f43f5e" fill="#f43f5e22" name="Expense" />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Average Donation Size Card & Recurring vs. One-Time Pie Chart */}
          <div className="flex flex-col gap-6 h-full justify-between">
            <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6 flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold mb-2">Average Donation Size</h2>
              <div className="text-4xl font-bold text-blue-600 mb-1">${avgDonation.toLocaleString()}</div>
              <div className="text-gray-500 text-sm">This period</div>
            </div>
            <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6 flex-1">
              <h2 className="text-lg font-bold mb-4">Recurring vs. One-Time Donations</h2>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie data={recurringVsOneTime} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
                    {recurringVsOneTime.map((entry, index) => (
                      <Cell key={`cell-type-${index}`} fill={DONATION_TYPE_COLORS[index % DONATION_TYPE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={v => `$${v.toLocaleString()}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Business Verification & Growth Metrics */}
      <section className="bg-gray-50 dark:bg-darkcard rounded-2xl p-6 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Verification Pie Chart */}
          <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6 max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-4">Business Verification</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={businessVerification} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {businessVerification.map((entry, index) => (
                    <Cell key={`cell-biz-${index}`} fill={BIZ_COLORS[index % BIZ_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Growth Metrics Line Chart */}
          <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Growth Metrics</h2>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={growthMetrics} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={2} name="Users" />
                <Line type="monotone" dataKey="projects" stroke="#10b981" strokeWidth={2} name="Projects" />
                <Line type="monotone" dataKey="donations" stroke="#a21caf" strokeWidth={2} name="Donations" />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Section: Geographical Distribution (Interactive Map) */}
      <section className="bg-gray-50 dark:bg-darkcard rounded-2xl p-6 shadow-inner">
        <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6 max-w-2xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Geographical Distribution</h2>
          <div className="w-full h-80 relative">
            <ComposableMap projectionConfig={{ scale: 120 }} width={600} height={320}>
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => {
                    const countryDatum = geoDistribution.find(d => d.code === geo.properties.ISO_A3);
                    const isSelected = selectedCountry === geo.properties.ISO_A3;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => setTooltip(countryDatum ? `${countryDatum.country}: $${countryDatum.value.toLocaleString()}` : geo.properties.NAME)}
                        onMouseLeave={() => setTooltip(null)}
                        onClick={() => handleCountryClick(geo.properties.ISO_A3)}
                        style={{
                          default: {
                            fill: countryDatum ? colorScale(countryDatum.value) : '#e5e7eb',
                            outline: 'none',
                            stroke: isSelected ? '#f59e42' : '#fff',
                            strokeWidth: isSelected ? 2 : 0.5,
                            cursor: countryDatum ? 'pointer' : 'default',
                            transition: 'fill 0.2s',
                          },
                          hover: {
                            fill: countryDatum ? '#2563eb' : '#cbd5e1',
                            outline: 'none',
                          },
                          pressed: {
                            fill: '#f59e42',
                            outline: 'none',
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
            {tooltip && (
              <div className="absolute left-1/2 top-2 text-xs px-3 py-1 bg-white rounded shadow border border-gray-200 -translate-x-1/2 z-10 pointer-events-none">
                {tooltip}
              </div>
            )}
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">* Click a country to filter (dummy logic)</div>
        </div>
      </section>
    </div>
  );
}; 