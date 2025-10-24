import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCapturePage } from './photo-capture.page';

describe('PhotoCapturePage', () => {
  let component: PhotoCapturePage;
  let fixture: ComponentFixture<PhotoCapturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCapturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
