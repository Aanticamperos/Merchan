# Merchan App - Reporte de Daños Viales

Una aplicación móvil desarrollada con Ionic 8 y Angular para reportar daños en la infraestructura vial.

## Características

- **Splash Screen**: Pantalla de bienvenida con el logo de la aplicación
- **Mis Reportes**: Lista de reportes creados por el usuario
- **Detalle de Reporte**: Vista detallada de un reporte específico
- **Opciones de Reporte**: Selección entre reporte manual o automático
- **Reporte Manual**: Formulario para crear reportes con foto y ubicación
- **Vista Previa de Foto**: Previsualización de la foto capturada
- **Permisos de Ubicación**: Solicitud de permisos de geolocalización
- **Captura de Foto**: Interfaz de cámara para tomar fotos

## Tecnologías Utilizadas

- **Ionic 8**: Framework para aplicaciones móviles híbridas
- **Angular 20**: Framework de desarrollo web
- **Capacitor**: Para acceso a funcionalidades nativas del dispositivo
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador de CSS

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd Merchan
```

2. Instala las dependencias:
```bash
npm install
```

3. Instala los plugins de Capacitor:
```bash
npx cap sync
```

## Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá en `http://localhost:4200`

## Construcción para Producción

Para construir la aplicación para producción:

```bash
npm run build
```

## Plataformas Móviles

### Android

1. Añade la plataforma Android:
```bash
npx cap add android
```

2. Abre en Android Studio:
```bash
npx cap open android
```

### iOS

1. Añade la plataforma iOS:
```bash
npx cap add ios
```

2. Abre en Xcode:
```bash
npx cap open ios
```

## Funcionalidades Implementadas

### Servicios

- **CameraService**: Manejo de la cámara del dispositivo
- **LocationService**: Gestión de geolocalización y permisos

### Modelos

- **Report**: Interfaz para los reportes de daños viales
- **ReportType**: Interfaz para los tipos de reportes

### Pantallas

1. **Splash**: Pantalla de bienvenida
2. **My Reports**: Lista de reportes del usuario
3. **Report Detail**: Detalle de un reporte específico
4. **Report Options**: Opciones para crear nuevo reporte
5. **Manual Report**: Formulario de reporte manual
6. **Photo Preview**: Vista previa de foto capturada
7. **Location Permissions**: Solicitud de permisos de ubicación
8. **Photo Capture**: Interfaz de captura de foto

## Estructura del Proyecto

```
src/
├── app/
│   ├── models/
│   │   └── report.ts
│   ├── services/
│   │   ├── camera.service.ts
│   │   └── location.service.ts
│   ├── splash/
│   ├── my-reports/
│   ├── report-detail/
│   ├── report-options/
│   ├── manual-report/
│   ├── photo-preview/
│   ├── location-permissions/
│   └── photo-capture/
├── assets/
├── environments/
└── theme/
```

## Permisos Requeridos

La aplicación requiere los siguientes permisos:

- **Cámara**: Para capturar fotos de los daños
- **Ubicación**: Para obtener coordenadas precisas del problema
- **Almacenamiento**: Para guardar fotos temporalmente

## Personalización

### Tema

El tema oscuro está habilitado por defecto. Para cambiar el tema, modifica el archivo `src/global.scss`.

### Colores

Los colores principales de la aplicación se pueden personalizar en los archivos SCSS de cada componente.

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
