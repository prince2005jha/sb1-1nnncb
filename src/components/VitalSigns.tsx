import React from 'react';
import { Heart, Thermometer, Activity, Wind } from 'lucide-react';

const vitals = [
  {
    icon: Heart,
    label: 'Heart Rate',
    value: '72 bpm',
    status: 'normal',
  },
  {
    icon: Activity,
    label: 'Blood Pressure',
    value: '120/80',
    status: 'normal',
  },
  {
    icon: Thermometer,
    label: 'Temperature',
    value: '98.6°F',
    status: 'normal',
  },
  {
    icon: Wind,
    label: 'Oxygen Level',
    value: '98%',
    status: 'normal',
  },
];

export default function VitalSigns() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Real-time Vital Signs</h2>
      <div className="grid grid-cols-2 gap-6">
        {vitals.map((vital) => {
          const Icon = vital.icon;
          return (
            <div key={vital.label} className="flex items-start space-x-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{vital.label}</p>
                <p className="text-lg font-semibold text-gray-900">{vital.value}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {vital.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}