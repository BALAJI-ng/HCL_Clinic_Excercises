import { Routes } from '@angular/router';
import { ClinicOutcomes } from './clinic-outcomes/clinic-outcomes';

export const routes: Routes = [
  { path: '', component: ClinicOutcomes },
  { path: 'clinic-outcomes', component: ClinicOutcomes },
  { path: '**', redirectTo: '' },
];
