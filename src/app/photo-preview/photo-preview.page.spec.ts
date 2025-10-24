import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoPreviewPage } from './photo-preview.page';

describe('PhotoPreviewPage', () => {
  let component: PhotoPreviewPage;
  let fixture: ComponentFixture<PhotoPreviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
