import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonBackButton, AlertController } from '@ionic/angular/standalone';
import { Report } from '../models/report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.page.html',
  styleUrls: ['./report-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, DatePipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonBackButton]
})
export class ReportDetailPage implements OnInit {

  report: Report | null = null;
  reportId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.reportId = this.route.snapshot.queryParams['id'];
    if (this.reportId) {
      this.loadReport(this.reportId);
    }
  }

  loadReport(id: string) {
    const report = this.reportService.getReportById(id);
    if (report) {
      // Mapear el tipo a nombre legible
      this.report = {
        ...report,
        type: this.reportService.getTypeDisplayName(report.type)
      };
    }
  }

  goBack() {
    this.router.navigate(['/all-reports']);
  }

  async deleteReport() {
    if (!this.report) return;

    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar el reporte de ${this.report.address}? Esta acción no se puede deshacer.`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.reportService.deleteReport(this.reportId);
            // Navegar de vuelta a all-reports
            this.router.navigate(['/all-reports'], { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
}