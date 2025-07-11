import { createAction, props } from '@ngrx/store';
import { GmiData, TimeInRange, ClinicMetadata } from '../model/State.model';

export const loadTimeInRange = createAction('[Clinic] Load Time In Range');
export const loadGmi = createAction('[Clinic] Load GMI');
export const loadClinicMetadata = createAction(
  '[Clinic] Load Clinic Metadata',
  props<{ selectedPeriod: number }>()
);

export const loadTimeInRangeSuccess = createAction(
  '[Clinic] Load Time In Range Success',
  props<{ time: TimeInRange }>()
);

export const loadGmiSuccess = createAction(
  '[Clinic] Load GMI Success',
  props<{ gmi: GmiData }>()
);

export const loadClinicMetadataSuccess = createAction(
  '[Clinic] Load Clinic Metadata Success',
  props<{ metadata: ClinicMetadata }>()
);

export const changePeriod = createAction(
  '[Clinic] Change Period',
  props<{ selectedPeriod: number }>()
);
