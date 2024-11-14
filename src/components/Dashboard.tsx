import React from 'react';
import { Activity, Brain, Heart, Users } from 'lucide-react';
import MetricCard from './MetricCard';
import PredictionList from './PredictionList';
import RiskMatrix from './RiskMatrix';
import VitalSigns from './VitalSigns';

const metrics = [
  {
    label: 'Active Patients',
    value: 1284,
    change: 12.5,
    trend: 'up' as const,
    icon: Users,
  },
  {
    label: 'Risk Alerts',
    value: 28,
    change: -5.3,
    trend: 'down' as const,
    icon: Activity,
  },
  {
    label: 'AI Predictions',
    value: 892,
    change: 8.1,
    trend: 'up' as const,
    icon: Brain,
  },
  {
    label: 'Critical Cases',
    value: 15,
    change: -2.8,
    trend: 'down' as const,
    icon: Heart,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            AI-Driven Healthcare Analytics
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Real-time patient monitoring and predictive analytics
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RiskMatrix />
          <VitalSigns />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <PredictionList />
        </div>
      </div>
    </div>
  );
}