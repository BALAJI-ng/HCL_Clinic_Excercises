import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import {
  GmiData,
  TimeInRange,
  ClinicMetadata,
} from '../clinic-outcomes/model/State.model';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  getTimeInRange(selectedPeriod: number = 30): Observable<TimeInRange> {
    // Mock different data based on selected period
    const timeInRangeData = {
      30: {
        veryLow: 0,
        low: 2,
        inRange: 82,
        high: 15,
        veryHigh: 1,
      },
      60: {
        veryLow: 0,
        low: 12,
        inRange: 72,
        high: 5,
        veryHigh: 11,
      },
      90: {
        veryLow: 0,
        low: 2,
        inRange: 52,
        high: 55,
        veryHigh: 1,
      },
    };

    return of(
      timeInRangeData[selectedPeriod as keyof typeof timeInRangeData] ||
        timeInRangeData[30]
    ).pipe(delay(500));
  }

  getGMI(selectedPeriod: number = 30): Observable<GmiData> {
    // Mock different GMI data based on selected period
    const gmiData = {
      30: {
        '<7': 72,
        '7-8': 23,
        '>=8': 5,
        averageGMI: 6.7,
      },
      60: {
        '<7': 68,
        '7-8': 26,
        '>=8': 6,
        averageGMI: 6.9,
      },
      90: {
        '<7': 65,
        '7-8': 28,
        '>=8': 7,
        averageGMI: 7.1,
      },
    };

    return of(
      gmiData[selectedPeriod as keyof typeof gmiData] || gmiData[30]
    ).pipe(delay(500));
  }

  getClinicMetadata(selectedPeriod: number = 30): Observable<ClinicMetadata> {
    // Get current date and time
    const now = new Date();
    const currentTimestamp = now.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    // Simulate different data based on selected period
    const metadataMap = {
      30: {
        patientCount: 120,
        dateRange: {
          start: '01/01/2024',
          end: '01/31/2024',
        },
        lastUpdated: currentTimestamp,
        selectedPeriod: 30,
      },
      60: {
        patientCount: 150,
        dateRange: {
          start: '12/01/2023',
          end: '01/31/2024',
        },
        lastUpdated: currentTimestamp,
        selectedPeriod: 60,
      },
      90: {
        patientCount: 180,
        dateRange: {
          start: '11/01/2023',
          end: '01/31/2024',
        },
        lastUpdated: currentTimestamp,
        selectedPeriod: 90,
      },
    };

    return of(
      metadataMap[selectedPeriod as keyof typeof metadataMap] || metadataMap[30]
    ).pipe(delay(300));
  }
}
