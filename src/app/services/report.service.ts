import { Injectable } from '@angular/core';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: Report[] = [];

  constructor() {
    this.loadReports();
    // Agregar reportes de ejemplo si no hay ninguno
    if (this.reports.length === 0) {
      this.reports = [
        {
          id: '1',
          address: 'Calle 80 #12-34, Bogotá',
          type: 'bache',
          status: 'Pendiente',
          createdAt: new Date('2024-01-15'),
          updatedAt: new Date('2024-01-15')
        },
        {
          id: '2',
          address: 'Carrera 7 #45-67, Bogotá',
          type: 'semaforo',
          status: 'En Proceso',
          createdAt: new Date('2024-01-14'),
          updatedAt: new Date('2024-01-16')
        },
        {
          id: '3',
          address: 'Avenida 68 #23-45, Bogotá',
          type: 'senalizacion',
          status: 'Completado',
          createdAt: new Date('2024-01-10'),
          updatedAt: new Date('2024-01-18')
        }
      ];
      this.saveReports();
    }
  }

  // Obtener todos los reportes
  getAllReports(): Report[] {
    return this.reports;
  }

  // Agregar un nuevo reporte
  addReport(report: Report): void {
    this.reports.push(report);
    this.saveReports();
  }

  // Obtener un reporte por ID
  getReportById(id: string): Report | undefined {
    return this.reports.find(r => r.id === id);
  }

  // Actualizar un reporte
  updateReport(report: Report): void {
    const index = this.reports.findIndex(r => r.id === report.id);
    if (index !== -1) {
      this.reports[index] = report;
      this.saveReports();
    }
  }

  // Eliminar un reporte
  deleteReport(id: string): void {
    this.reports = this.reports.filter(r => r.id !== id);
    this.saveReports();
  }

  // Guardar reportes en localStorage
  private saveReports(): void {
    try {
      localStorage.setItem('reports', JSON.stringify(this.reports));
    } catch (error) {
      console.error('Error saving reports to localStorage:', error);
    }
  }

  // Cargar reportes desde localStorage
  private loadReports(): void {
    try {
      const stored = localStorage.getItem('reports');
      if (stored) {
        const parsedReports = JSON.parse(stored);
        // Convertir las fechas de string a Date
        this.reports = parsedReports.map((report: any) => ({
          ...report,
          createdAt: new Date(report.createdAt),
          updatedAt: new Date(report.updatedAt)
        }));
      }
    } catch (error) {
      console.error('Error loading reports from localStorage:', error);
    }
  }

  // Mapear el tipo de problema a un nombre legible
  getTypeDisplayName(type: string): string {
    const typeMap: { [key: string]: string } = {
      'bache': 'Bache',
      'semaforo': 'Semáforo dañado',
      'senalizacion': 'Señalización',
      'iluminacion': 'Iluminación',
      'otro': 'Otro'
    };
    return typeMap[type] || type;
  }
}

