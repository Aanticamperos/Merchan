import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonBackButton, AlertController } from '@ionic/angular/standalone';
import { Report } from '../models/report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.page.html',
  styleUrls: ['./all-reports.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonBackButton]
})
export class AllReportsPage implements OnInit {

  reports: Report[] = [];

  constructor(
    private router: Router,
    private reportService: ReportService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadReports();
  }

  ionViewWillEnter() {
    // Recargar reportes cada vez que se entra a esta página
    this.loadReports();
  }

  loadReports() {
    this.reports = this.reportService.getAllReports();
  }

  getTypeDisplayName(type: string): string {
    return this.reportService.getTypeDisplayName(type);
  }

  viewReport(report: Report) {
    this.router.navigate(['/report-detail'], { 
      queryParams: { id: report.id } 
    });
  }

  async deleteReport(report: Report, event: Event) {
    event.stopPropagation();
    
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar el reporte de ${report.address}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.reportService.deleteReport(report.id);
            this.loadReports();
          }
        }
      ]
    });

    await alert.present();
  }
}

