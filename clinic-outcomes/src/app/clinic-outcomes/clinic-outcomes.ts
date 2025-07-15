import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadGmi,
  loadTimeInRange,
  loadGmiSuccess,
  loadTimeInRangeSuccess,
  loadClinicMetadataSuccess,
  changePeriod,
} from './store/action';
import { 
  selectGmi, 
  selectTimeInRange, 
  selectClinicMetadata,
  selectPatientCount,
  selectDateRange,
  selectLastUpdated,
  selectSelectedPeriod
} from './store/selectors';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TimeInRange, GmiData, ClinicMetadata } from './model/State.model';
import { ClinicService } from '../services/clinic-service';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './clinic-outcomes.html',
  styleUrl: './clinic-outcomes.scss',
})
export class ClinicOutcomes implements OnInit {
  timeInRange$: Observable<TimeInRange | null>;
  gmi$: Observable<GmiData | null>;
  clinicMetadata$: Observable<ClinicMetadata | null>;
  patientCount$: Observable<number | undefined>;
  dateRange$: Observable<{start: string; end: string} | undefined>;
  lastUpdated$: Observable<string | undefined>;
  selectedPeriod$: Observable<number>;
  
  // Color scheme for GMI chart
  gmiColorScheme: any = {
    domain: ['#8BC34A', '#FFEB3B', '#F44336'], // Green, Yellow, Red
  };

  // Custom label formatting to show percentages
  formatLabel = (value: any): string => {
    return `${value}%`;
  };

  constructor(private store: Store, private clinicService: ClinicService) {
    this.timeInRange$ = this.store.select(selectTimeInRange);
    this.gmi$ = this.store.select(selectGmi);
    this.clinicMetadata$ = this.store.select(selectClinicMetadata);
    this.patientCount$ = this.store.select(selectPatientCount);
    this.dateRange$ = this.store.select(selectDateRange);
    this.lastUpdated$ = this.store.select(selectLastUpdated);
    this.selectedPeriod$ = this.store.select(selectSelectedPeriod);
  }

  ngOnInit() {
    this.loadData(30); // Default to 30 days
  }

  onPeriodChange(selectedPeriod: number) {
    this.store.dispatch(changePeriod({ selectedPeriod }));
    this.loadData(selectedPeriod);
  }

  private loadData(selectedPeriod: number) {
    // Load data directly from service and dispatch success actions
    this.clinicService.getTimeInRange(selectedPeriod).subscribe((time) => {
      this.store.dispatch(loadTimeInRangeSuccess({ time }));
    });

    this.clinicService.getGMI(selectedPeriod).subscribe((gmi) => {
      this.store.dispatch(loadGmiSuccess({ gmi }));
    });

    this.clinicService.getClinicMetadata(selectedPeriod).subscribe((metadata) => {
      this.store.dispatch(loadClinicMetadataSuccess({ metadata }));
    });
  }
}
