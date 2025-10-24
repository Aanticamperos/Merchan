import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton, IonIcon, AlertController } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-manual-report',
  templateUrl: './manual-report.page.html',
  styleUrls: ['./manual-report.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton, IonIcon]
})
export class ManualReportPage implements OnInit {

  address: string = '';
  selectedType: string = '';
  description: string = '';
  selectedPhoto: string | null = null;

  constructor(
    private router: Router,
    private cameraService: CameraService,
    private locationService: LocationService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async takePhoto() {
    try {
      const photo = await this.cameraService.takePicture();
      this.selectedPhoto = photo.webPath || null;
    } catch (error) {
      console.error('Error taking photo:', error);
      this.showAlert('Error', 'No se pudo tomar la foto. Inténtalo de nuevo.');
    }
  }

  removePhoto() {
    this.selectedPhoto = null;
  }

  isFormValid(): boolean {
    return this.address.trim().length > 0 && this.selectedType.length > 0;
  }

  async saveReport() {
    if (!this.isFormValid()) {
      this.showAlert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    try {
      // Obtener ubicación actual
      const position = await this.locationService.getCurrentPosition();
      
      // Crear el reporte
      const report = {
        id: Date.now().toString(),
        address: this.address,
        type: this.selectedType,
        status: 'Pendiente' as const,
        description: this.description,
        photo: this.selectedPhoto,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Aquí se guardaría en el servicio de reportes
      console.log('Reporte creado:', report);
      
      this.showAlert('Éxito', 'Reporte guardado correctamente.', () => {
        this.router.navigate(['/my-reports']);
      });

    } catch (error) {
      console.error('Error saving report:', error);
      this.showAlert('Error', 'No se pudo guardar el reporte. Inténtalo de nuevo.');
    }
  }

  private async showAlert(header: string, message: string, callback?: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'OK',
          handler: callback
        }
      ]
    });
    await alert.present();
  }
}