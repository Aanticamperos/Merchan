import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent]
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Simular tiempo de carga del splash
    setTimeout(() => {
      this.router.navigate(['/my-reports']);
    }, 3000);
  }
}