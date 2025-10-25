import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllReportsPage } from './all-reports.page';

describe('AllReportsPage', () => {
  let component: AllReportsPage;
  let fixture: ComponentFixture<AllReportsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

