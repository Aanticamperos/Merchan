import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'my-reports',
    loadComponent: () => import('./my-reports/my-reports.page').then( m => m.MyReportsPage)
  },
  {
    path: 'report-detail',
    loadComponent: () => import('./report-detail/report-detail.page').then( m => m.ReportDetailPage)
  },
  {
    path: 'report-options',
    loadComponent: () => import('./report-options/report-options.page').then( m => m.ReportOptionsPage)
  },
  {
    path: 'manual-report',
    loadComponent: () => import('./manual-report/manual-report.page').then( m => m.ManualReportPage)
  },
  {
    path: 'photo-preview',
    loadComponent: () => import('./photo-preview/photo-preview.page').then( m => m.PhotoPreviewPage)
  },
  {
    path: 'location-permissions',
    loadComponent: () => import('./location-permissions/location-permissions.page').then( m => m.LocationPermissionsPage)
  },
  {
    path: 'photo-capture',
    loadComponent: () => import('./photo-capture/photo-capture.page').then( m => m.PhotoCapturePage)
  },
];
