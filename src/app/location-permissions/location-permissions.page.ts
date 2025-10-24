import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, AlertController } from '@ionic/angular/standalone';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-permissions',
  templateUrl: './location-permissions.page.html',
  styleUrls: ['./location-permissions.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon]
})
export class LocationPermissionsPage implements OnInit {

  constructor(
    private router: Router,
    private locationService: LocationService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async requestLocationPermission() {
    try {
      const granted = await this.locationService.requestPermissions();
      if (granted) {
        this.showAlert('Éxito', 'Permisos de ubicación concedidos.');
      } else {
        this.showAlert('Error', 'No se pudieron obtener los permisos de ubicación.');
      }
    } catch (error) {
      console.error('Error requesting location permissions:', error);
      this.showAlert('Error', 'Error al solicitar permisos de ubicación.');
    }
  }

  goToPhotoCapture() {
    this.router.navigate(['/photo-capture']);
  }

  goToSave() {
    this.router.navigate(['/my-reports']);
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}