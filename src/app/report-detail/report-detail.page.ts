import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Report } from '../models/report';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.page.html',
  styleUrls: ['./report-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, DatePipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon]
})
export class ReportDetailPage implements OnInit {

  report: Report | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const reportId = this.route.snapshot.queryParams['id'];
    if (reportId) {
      this.loadReport(reportId);
    }
  }

  loadReport(id: string) {
    // Simular carga de reporte desde servicio
    const mockReports: Report[] = [
      {
        id: '1',
        address: 'Calle 80 #12-34, Bogotá',
        type: 'Bache',
        status: 'Pendiente',
        description: 'Bache profundo con agua estancada que representa peligro para vehículos',
        photo: 'https://via.placeholder.com/400x250/333333/ffffff?text=Bache+con+agua',
        latitude: 4.6097,
        longitude: -74.0817,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: '2',
        address: 'Carrera 7 #45-67, Bogotá',
        type: 'Semáforo dañado',
        status: 'En Proceso',
        description: 'Semáforo no funciona correctamente, solo muestra luz roja',
        photo: 'https://via.placeholder.com/400x250/333333/ffffff?text=Semáforo+dañado',
        latitude: 4.6097,
        longitude: -74.0817,
        createdAt: new Date('2024-01-14'),
        updatedAt: new Date('2024-01-16')
      },
      {
        id: '3',
        address: 'Avenida 68 #23-45, Bogotá',
        type: 'Señalización',
        status: 'Completado',
        description: 'Señal de tránsito dañada y caída',
        photo: 'https://via.placeholder.com/400x250/333333/ffffff?text=Señal+dañada',
        latitude: 4.6097,
        longitude: -74.0817,
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-18')
      }
    ];

    this.report = mockReports.find(r => r.id === id) || null;
  }

  goBack() {
    this.router.navigate(['/my-reports']);
  }
}