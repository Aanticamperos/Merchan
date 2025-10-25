import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.page.html',
  styleUrls: ['./my-reports.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon]
})
export class MyReportsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewAllReports() {
    this.router.navigate(['/all-reports']);
  }

  createNewReport() {
    this.router.navigate(['/report-options']);
  }
}