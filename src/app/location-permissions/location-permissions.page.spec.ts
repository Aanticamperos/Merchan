import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationPermissionsPage } from './location-permissions.page';

describe('LocationPermissionsPage', () => {
  let component: LocationPermissionsPage;
  let fixture: ComponentFixture<LocationPermissionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
