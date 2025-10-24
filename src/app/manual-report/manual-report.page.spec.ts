import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManualReportPage } from './manual-report.page';

describe('ManualReportPage', () => {
  let component: ManualReportPage;
  let fixture: ComponentFixture<ManualReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
