import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton, IonIcon, IonButtons, IonBackButton, AlertController, IonSpinner } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { ReportService } from '../services/report.service';
import { Report } from '../models/report';

@Component({
  selector: 'app-automatic-report',
  templateUrl: './automatic-report.page.html',
  styleUrls: ['./automatic-report.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton, IonIcon, IonButtons, IonBackButton, IonSpinner]
})
export class AutomaticReportPage implements OnInit {

  address: string = '';
  selectedType: string = '';
  description: string = '';
  selectedPhoto: string | null = null;
  isLoadingAddress: boolean = false;

  constructor(
    private router: Router,
    private cameraService: CameraService,
    private locationService: LocationService,
    private reportService: ReportService,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    await this.loadCurrentAddress();
  }

  async loadCurrentAddress() {
    this.isLoadingAddress = true;
    
    try {
      // Verificar permisos primero
      const hasPermission = await this.locationService.checkPermissions();
      
      if (!hasPermission) {
        const granted = await this.locationService.requestPermissions();
        if (!granted) {
          this.showAlert('Permisos requeridos', 'Se necesitan permisos de ubicación para usar el reporte automático.');
          this.router.navigate(['/report-options']);
          return;
        }
      }

      // Obtener posición actual
      const position = await this.locationService.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Obtener dirección basada en coordenadas
      const address = await this.locationService.getAddressFromCoordinates(latitude, longitude);
      this.address = address;

    } catch (error) {
      console.error('Error cargando dirección:', error);
      this.showAlert('Error', 'No se pudo obtener la ubicación. Por favor verifica los permisos de ubicación.');
      this.router.navigate(['/report-options']);
    } finally {
      this.isLoadingAddress = false;
    }
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
      let latitude = 0;
      let longitude = 0;
      
      // Obtener coordenadas actuales
      try {
        const position = await this.locationService.getCurrentPosition();
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      } catch (error) {
        console.log('Ubicación no disponible, continuando sin coordenadas');
      }
      
      // Crear el reporte
      const report: Report = {
        id: Date.now().toString(),
        address: this.address,
        type: this.selectedType,
        status: 'Pendiente',
        description: this.description || undefined,
        photo: this.selectedPhoto || undefined,
        latitude: latitude || undefined,
        longitude: longitude || undefined,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Guardar en el servicio
      this.reportService.addReport(report);
      
      console.log('Reporte guardado:', report);
      
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

