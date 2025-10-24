import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-report-options',
  templateUrl: './report-options.page.html',
  styleUrls: ['./report-options.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon]
})
export class ReportOptionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToManualReport() {
    this.router.navigate(['/manual-report']);
  }

  goToAutomaticReport() {
    // Por ahora redirigir a manual report, se puede implementar después
    this.router.navigate(['/manual-report']);
  }
}