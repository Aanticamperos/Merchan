export interface Report {
  id: string;
  address: string;
  type: string;
  status: 'Pendiente' | 'En Proceso' | 'Completado';
  description?: string;
  photo?: string;
  latitude?: number;
  longitude?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReportType {
  id: string;
  name: string;
  icon: string;
}