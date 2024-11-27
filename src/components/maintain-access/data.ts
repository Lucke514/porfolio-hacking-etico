import type { Tool, SecurityPolicy } from './types';

export const herramientas: Tool[] = [
    {
        nombre: "Mimikatz",
        descripcion: "Herramienta para extraer contraseñas en texto claro y hashes de la memoria de Windows.",
        url: "https://github.com/gentilkiwi/mimikatz",
        requerimientos: "Sistema operativo Windows con privilegios de administrador.",
        icon: "Key"
    },
    {
        nombre: "Cobalt Strike",
        descripcion: "Herramienta de post-explotación para simular adversarios avanzados.",
        url: "https://www.cobaltstrike.com/download",
        requerimientos: "Licencia válida de Cobalt Strike y acceso a un servidor Beacon.",
        icon: "Crosshair"
    }
];

export const politicasSeguridad: SecurityPolicy[] = [
    {
        titulo: "Política de Gestión de Contraseñas",
        descripcion: "Requiere contraseñas complejas y cambios periódicos para prevenir accesos no autorizados.",
        icon: "Key"
    },
    {
        titulo: "Política de Control de Acceso",
        descripcion: "Asigna niveles mínimos de privilegio según las funciones del usuario.",
        icon: "Shield"
    },
    {
        titulo: "Política de Auditoría y Monitorización",
        descripcion: "Establece procedimientos para la monitorización y auditorías continuas para detectar incidentes de seguridad.",
        icon: "Activity"
    }
];

export const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";