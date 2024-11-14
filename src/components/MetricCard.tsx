import React from 'react';
import { LucideIcon, TrendingDown, TrendingUp, Minus } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
}

export default function MetricCard({ label, value, change, trend, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="ml-3 text-lg font-medium text-gray-900">{label}</h3>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-gray-900">{value.toLocaleString()}</p>
        <div className="flex items-center mt-2">
          {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
          {trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
          {trend === 'neutral' && <Minus className="w-4 h-4 text-gray-500" />}
          <span className={`ml-2 text-sm ${
            trend === 'up' ? 'text-green-600' : 
            trend === 'down' ? 'text-red-600' : 
            'text-gray-600'
          }`}>
            {Math.abs(change)}% {trend === 'up' ? 'increase' : trend === 'down' ? 'decrease' : 'no change'}
          </span>
        </div>
      </div>
    </div>
  );
}