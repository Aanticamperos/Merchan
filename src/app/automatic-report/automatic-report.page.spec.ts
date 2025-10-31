import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutomaticReportPage } from './automatic-report.page';

describe('AutomaticReportPage', () => {
  let component: AutomaticReportPage;
  let fixture: ComponentFixture<AutomaticReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

