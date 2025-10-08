# UNICAFE App

Aplicación Expo con TypeScript para la demostración de la experiencia UNICAFE en Android, iOS y Web.

## Requisitos

- Node.js LTS (18+ recomendado)
- npm 9+ o pnpm/yarn si se prefiere (los comandos listados usan npm)

## Instalación

```bash
npm install
```

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run start` | Inicia el servidor de desarrollo (Metro) con menú interactivo de Expo. |
| `npm run start:web` | Abre el proyecto directamente en el navegador con Expo Web. |
| `npm run typecheck` | Ejecuta TypeScript en modo estricto sin emitir archivos. |

## Estructura principal

```
app/
  _layout.tsx              # Configuración del stack (expo-router)
  (public)/                # Rutas públicas disponibles en web
    index.tsx              # WelcomeScreen
    login/
      estudiante.tsx       # StudentLoginScreen
      personal.tsx         # StaffLoginScreen
    dashboard/
      estudiante.tsx       # StudentDashboardScreen
      personal.tsx         # StaffDashboardScreen
components/
  FooterLinks.tsx          # Footer con enlaces e íconos
  PrimaryButton.tsx        # Botón reutilizable con variantes
  TextField.tsx            # Campo de texto estilizado con validaciones
constants/
  theme.ts                 # Definición de colores, espaciamiento y radios
```

## Notas de desarrollo

- La navegación se implementa con **expo-router**, lo cual habilita soporte de rutas web de forma nativa.
- Las validaciones de autenticación son simuladas. Los `TODO` marcan dónde integrar servicios reales.
- Todos los textos permanecen en español según los requerimientos originales.
- Asegura ejecutar `npm run typecheck` para verificar que no existan errores de tipos antes de publicar cambios.
