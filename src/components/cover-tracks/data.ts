import type { MonitoringTool, PreventionMethod, AnonymityMethod } from './types';

export const monitoringTools: MonitoringTool[] = [
    {
        title: "Visor de Eventos de Windows",
        description: "Herramienta integrada que permite monitorear eventos del sistema, aplicaciones y seguridad en Windows. Registra actividades críticas para el análisis y solución de problemas.",
        features: [
            "Registro detallado de eventos del sistema, seguridad y aplicaciones",
            "Filtrado y búsqueda de eventos específicos",
            "Monitoreo en tiempo real"
        ],
        storedInfo: [
            "Errores y advertencias del sistema",
            "Intentos de inicio de sesión y cambios de configuración",
            "Actividades específicas de aplicaciones y servicios"
        ]
    },
    {
        title: "Logs de Linux",
        description: "Los logs en Linux registran eventos del sistema, aplicaciones y servicios en /var/log/. Son fundamentales para monitorear actividades y resolver problemas.",
        features: [
            "Registro de eventos del sistema y servicios",
            "Rotación automática de logs para controlar espacio y retención",
            "Compatibilidad con herramientas avanzadas de análisis"
        ],
        storedInfo: [
            "Eventos de inicio y apagado del sistema",
            "Intentos de autenticación y actividad de usuarios",
            "Mensajes de errores de aplicaciones y servicios"
        ]
    }
];

export const preventionMethods: PreventionMethod[] = [
    {
        title: "Prevención del Borrado de Logs",
        description: "Para asegurar la integridad de los registros, se pueden implementar las siguientes técnicas:",
        techniques: [
            {
                name: "Restricciones de Permisos",
                description: "Limitar acceso a los logs solo a usuarios autorizados"
            },
            {
                name: "Logs Remotos",
                description: "Enviar registros a servidores remotos para prevenir alteraciones locales"
            },
            {
                name: "Integridad de Logs",
                description: "Usar firmas digitales o hashing para detectar modificaciones"
            },
            {
                name: "Auditorías Regulares",
                description: "Revisar los logs periódicamente para identificar intentos de manipulación"
            }
        ]
    }
];

export const anonymityMethods: AnonymityMethod[] = [
    {
        name: "VPN",
        description: "Ocultan la dirección IP enrutando el tráfico a través de servidores intermediarios"
    },
    {
        name: "Tor",
        description: "Red de nodos encriptados para anonimizar el tráfico"
    },
    {
        name: "Navegadores Anónimos",
        description: "Diseñados para maximizar privacidad, como Tor Browser"
    },
    {
        name: "Proxies",
        description: "Intermedian entre el usuario y sitios web, ocultando la IP original"
    }
];

export const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";