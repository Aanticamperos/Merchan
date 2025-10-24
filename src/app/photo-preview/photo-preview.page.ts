import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.page.html',
  styleUrls: ['./photo-preview.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon]
})
export class PhotoPreviewPage implements OnInit {

  photoUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cameraService: CameraService
  ) { }

  ngOnInit() {
    this.photoUrl = this.route.snapshot.queryParams['photo'] || '';
  }

  async retakePhoto() {
    try {
      const photo = await this.cameraService.takePicture();
      this.photoUrl = photo.webPath || '';
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  async selectFromGallery() {
    try {
      const photo = await this.cameraService.selectFromGallery();
      this.photoUrl = photo.webPath || '';
    } catch (error) {
      console.error('Error selecting from gallery:', error);
    }
  }
}