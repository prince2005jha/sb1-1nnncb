import React from 'react';
import { AlertTriangle } from 'lucide-react';

const riskLevels = [
  { id: 1, name: 'John Doe', risk: 85, condition: 'Cardiovascular' },
  { id: 2, name: 'Jane Smith', risk: 72, condition: 'Diabetes' },
  { id: 3, name: 'Mike Johnson', risk: 68, condition: 'Respiratory' },
  { id: 4, name: 'Sarah Williams', risk: 63, condition: 'Neurological' },
];

export default function RiskMatrix() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">High-Risk Patient Matrix</h2>
        <AlertTriangle className="h-5 w-5 text-amber-500" />
      </div>
      <div className="space-y-4">
        {riskLevels.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-gray-900">{patient.name}</p>
              <p className="text-sm text-gray-500">{patient.condition}</p>
            </div>
            <div className="w-48">
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${patient.risk}%` }}
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {patient.risk}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}