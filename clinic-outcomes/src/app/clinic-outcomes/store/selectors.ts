import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClinicOutcomesState } from '../model/State.model';

// 🔍 Grab the whole feature slice
export const selectClinicOutcomes =
  createFeatureSelector<ClinicOutcomesState>('clinicOutcomes');

// 📊 Time In Range
export const selectTimeInRange = createSelector(
  selectClinicOutcomes,
  (state) => state.timeInRange
);

// 🥧 GMI Data
export const selectGmi = createSelector(
  selectClinicOutcomes,
  (state) => state.gmi
);

// � Clinic Metadata
export const selectClinicMetadata = createSelector(
  selectClinicOutcomes,
  (state) => state.metadata
);

// �👥 Patient Count
export const selectPatientCount = createSelector(
  selectClinicMetadata,
  (metadata) => metadata?.patientCount
);

// 📅 Date Range
export const selectDateRange = createSelector(
  selectClinicMetadata,
  (metadata) => metadata?.dateRange
);

// 🕒 Last Updated Timestamp
export const selectLastUpdated = createSelector(
  selectClinicMetadata,
  (metadata) => metadata?.lastUpdated
);

// 📆 Selected Period
export const selectSelectedPeriod = createSelector(
  selectClinicMetadata,
  (metadata) => metadata?.selectedPeriod || 30
);
