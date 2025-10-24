import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { Report } from '../models/report';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.page.html',
  styleUrls: ['./my-reports.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon]
})
export class MyReportsPage implements OnInit {

  reports: Report[] = [
    {
      id: '1',
      address: 'Calle 80 #12-34, Bogotá',
      type: 'Bache',
      status: 'Pendiente',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      address: 'Carrera 7 #45-67, Bogotá',
      type: 'Semáforo dañado',
      status: 'En Proceso',
      createdAt: new Date('2024-01-14'),
      updatedAt: new Date('2024-01-16')
    },
    {
      id: '3',
      address: 'Avenida 68 #23-45, Bogotá',
      type: 'Señalización',
      status: 'Completado',
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-18')
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewReport(report: Report) {
    this.router.navigate(['/report-detail'], { 
      queryParams: { id: report.id } 
    });
  }

  goToReportOptions() {
    this.router.navigate(['/report-options']);
  }
}