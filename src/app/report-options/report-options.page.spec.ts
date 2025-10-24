import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportOptionsPage } from './report-options.page';

describe('ReportOptionsPage', () => {
  let component: ReportOptionsPage;
  let fixture: ComponentFixture<ReportOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
