import { createReducer, on } from '@ngrx/store';
import { 
  loadTimeInRangeSuccess, 
  loadGmiSuccess, 
  loadClinicMetadataSuccess,
  changePeriod 
} from './action';
import { ClinicOutcomesState } from '../model/State.model';

export const initialState: ClinicOutcomesState = {
  timeInRange: null,
  gmi: null,
  metadata: null,
};

export const clinicReducer = createReducer(
  initialState,
  on(loadTimeInRangeSuccess, (state, { time }) => ({
    ...state,
    timeInRange: time,
  })),
  on(loadGmiSuccess, (state, { gmi }) => ({ 
    ...state, 
    gmi 
  })),
  on(loadClinicMetadataSuccess, (state, { metadata }) => ({
    ...state,
    metadata
  })),
  on(changePeriod, (state, { selectedPeriod }) => ({
    ...state,
    metadata: state.metadata ? { ...state.metadata, selectedPeriod } : null
  }))
);
