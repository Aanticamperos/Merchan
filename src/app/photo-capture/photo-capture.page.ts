import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-photo-capture',
  templateUrl: './photo-capture.page.html',
  styleUrls: ['./photo-capture.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon]
})
export class PhotoCapturePage implements OnInit {

  constructor(
    private router: Router,
    private cameraService: CameraService
  ) { }

  ngOnInit() {
  }

  async capturePhoto() {
    try {
      const photo = await this.cameraService.takePicture();
      // Navegar a la vista previa con la foto
      this.router.navigate(['/photo-preview'], { 
        queryParams: { photo: photo.webPath } 
      });
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  }
}