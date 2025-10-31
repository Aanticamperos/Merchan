import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  async getCurrentPosition(): Promise<Position> {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }

  async requestPermissions(): Promise<boolean> {
    try {
      await Geolocation.requestPermissions();
      return true;
    } catch (error) {
      console.error('Error requesting location permissions:', error);
      return false;
    }
  }

  async checkPermissions(): Promise<boolean> {
    try {
      const permissions = await Geolocation.checkPermissions();
      return permissions.location === 'granted';
    } catch (error) {
      console.error('Error checking location permissions:', error);
      return false;
    }
  }

  async getAddressFromCoordinates(latitude: number, longitude: number): Promise<string> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      
      if (data && data.address) {
        // Construir dirección legible
        const address = data.address;
        const parts: string[] = [];
        
        if (address.road) parts.push(address.road);
        if (address.house_number) parts.push(address.house_number);
        if (address.neighbourhood) parts.push(address.neighbourhood);
        if (address.suburb) parts.push(address.suburb);
        if (address.city || address.town || address.village) parts.push(address.city || address.town || address.village);
        if (address.state) parts.push(address.state);
        if (address.country) parts.push(address.country);
        
        return parts.length > 0 ? parts.join(', ') : 'Dirección no disponible';
      }
      
      return 'Dirección no disponible';
    } catch (error) {
      console.error('Error obteniendo dirección:', error);
      return 'Dirección no disponible';
    }
  }
}
