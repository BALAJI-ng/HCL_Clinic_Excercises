import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicOutcomes } from './clinic-outcomes';

describe('ClinicOutcomes', () => {
  let component: ClinicOutcomes;
  let fixture: ComponentFixture<ClinicOutcomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicOutcomes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicOutcomes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
