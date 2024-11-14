export interface PatientData {
  id: string;
  name: string;
  age: number;
  riskScore: number;
  vitalSigns: {
    heartRate: number;
    bloodPressure: string;
    temperature: number;
    oxygenLevel: number;
  };
  predictedConditions: string[];
  lastUpdated: string;
}

export interface HealthMetric {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}