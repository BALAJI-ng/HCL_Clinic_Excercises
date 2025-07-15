export interface State {
  timeInRange: TimeInRange | null;
  gmi: GmiData | null;
}

export interface TimeInRange {
  veryLow?: number;
  low?: number;
  inRange?: number;
  high?: number;
  veryHigh?: number;
}

export interface GmiData {
  '<7': number;
  '7-8': number;
  '>=8': number;
  averageGMI: number;
}

export interface ClinicMetadata {
  patientCount: number;
  dateRange: { 
    start: string; 
    end: string; 
  };
  lastUpdated: string;
  selectedPeriod: number; // 30, 60, or 90 days
}

export interface ClinicOutcomesState {
  timeInRange: TimeInRange | null;
  gmi: GmiData | null;
  metadata: ClinicMetadata | null;
}
