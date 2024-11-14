import React from 'react';
import { Brain, AlertCircle } from 'lucide-react';

const predictions = [
  {
    id: 1,
    patient: 'Patricia Chen',
    prediction: 'High risk of Type 2 Diabetes',
    confidence: 89,
    timeframe: '3-6 months',
    factors: ['Family History', 'BMI', 'Blood Glucose Levels'],
  },
  {
    id: 2,
    patient: 'Robert Wilson',
    prediction: 'Early signs of Hypertension',
    confidence: 76,
    timeframe: '1-3 months',
    factors: ['Blood Pressure Trends', 'Lifestyle', 'Age'],
  },
  {
    id: 3,
    patient: 'Maria Garcia',
    prediction: 'Potential Respiratory Issues',
    confidence: 82,
    timeframe: '2-4 months',
    factors: ['Environmental Factors', 'Medical History', 'Recent Symptoms'],
  },
];

export default function PredictionList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">AI Predictions</h2>
        </div>
      </div>
      <div className="space-y-6">
        {predictions.map((prediction) => (
          <div
            key={prediction.id}
            className="bg-gray-50 rounded-lg p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {prediction.patient}
                </h3>
                <div className="flex items-center mt-1">
                  <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
                  <p className="text-gray-600">{prediction.prediction}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-right">
                  <span className="text-sm text-gray-500">Confidence</span>
                  <p className="text-lg font-semibold text-gray-900">
                    {prediction.confidence}%
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Timeframe: {prediction.timeframe}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {prediction.factors.map((factor) => (
                  <span
                    key={factor}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}