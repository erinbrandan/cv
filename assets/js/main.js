/**
 * Lógica para el CV Interactivo optimizada con Objeto de Datos
 */

// 1. Diccionario de datos (Sustituye al JSON externo para evitar errores de carga)
const timelineData = {
    "2013-2015": {
        "title": "Ciclo Medio Cocina y Gastronomía",
        "desc": "Especialización en técnicas de cocina profesional y gestión de materias primas. Desarrollo de habilidades de trabajo bajo presión y organización.",
        "color": "#3498db"
    },
    "2015-2017": {
        "title": "Ciclo Superior de Dirección de Cocina",
        "desc": "Gestión integral de establecimientos hosteleros, control de costes, diseño de menús y liderazgo de brigadas de cocina.",
        "color": "#3498db"
    },
    "2018": {
        "title": "Disfrutar Barcelona",
        "desc": "Ayudante de creatividad en Disfrutar (Barcelona). Participación activa en el proceso creativo de uno de los mejores restaurantes del mundo (3 estrellas Michelin).",
        "color": "#e67e22"
    },
   "2024-2026": {
    "title": "Ciclo Superior DAM",
    "desc": `
        <div class="timeline-detail-content">

            <h4 style="color: #3498db; margin-bottom: 8px;">Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) </h4>
            <p style="font-size: 0.9rem; margin-bottom: 12px;">
                Especialización en desarrollo multiplataforma y arquitectura de software, con un enfoque práctico en la creación de soluciones eficientes, escalables y seguras.
            </p>

            <p style="font-size: 0.9rem; margin-bottom: 10px;">
                Durante esta formación he consolidado una base técnica sólida en las siguientes áreas:
            </p>

            <ul style="list-style: none; padding-left: 0; font-size: 0.85rem; line-height: 1.6;">
                <li><strong>• Programación y Modelado de Software:</strong> Dominio de Java aplicando Programación Orientada a Objetos (POO) como base del desarrollo. Análisis y diseño de soluciones mediante pseudocódigo y modelado UML (diagramas de clases, secuencia y casos de uso, entre otros).</li>
                <li><strong>• Desarrollo Web y Móvil:</strong> Desarrollo de aplicaciones nativas en Android (Android Studio) y creación de interfaces modernas con HTML5, CSS3 y XML. Integración del flujo de diseño desde Figma hasta su implementación funcional con JavaScript.</li>
                <li><strong>• Desarrollo de Videojuegos:</strong> Creación de motores de videojuegos 2D utilizando C#, aplicando principios de lógica, físicas básicas y estructuración de sistemas interactivos.</li>
                <li><strong>• Sistemas y Redes:</strong> Instalación, configuración y administración de sistemas informáticos, especialmente en entornos Linux, incluyendo uso de línea de comandos. Conocimientos de redes y comunicaciones mediante protocolos como FTP, SSH, TCP/IP, DNS, UDP y HTTP/HTTPS.</li>
                <li><strong>• Gestión de Datos:</strong> Diseño, implementación y optimización de bases de datos SQL, incluyendo consultas complejas y uso eficiente de JOINs.</li>
                <li><strong>• Seguridad Informática:</strong> Fundamentos de criptografía, incluyendo algoritmos de cifrado (AES, RSA, DES) y funciones hash como SHA-256.</li>
                <li><strong>• Calidad de Software y Documentación:</strong> Aplicación de metodologías de testing (manual y automatizado), documentación técnica del código y generación de informes mediante herramientas como JasperReports.</li>
            </ul>

        </div>
    `,
    "color": "#3498db"
},
"2026": {
        "title": "Proyecto Final DAM",
        "desc": `
        <div class="timeline-detail-content">
            <h4 style="color: #e67e22; margin: 15px 0 8px 0;">Proyecto Destacado: WellnessGo</h4>

            <p style="font-size: 0.9rem;">
                Aplicación orientada a la conexión en tiempo real entre pacientes y profesionales de la salud, incorporando gestión inteligente de agendas y validación de documentación.
            </p>

            <ul style="list-style: none; padding-left: 0; font-size: 0.85rem; line-height: 1.6;">
                <li><strong>• Ecosistema de Aplicaciones:</strong> Desarrollo de dos aplicaciones nativas (Cliente y Profesional) conectadas mediante una API REST centralizada.</li>
                <li><strong>• Arquitectura:</strong> Implementación del patrón MVC, uso de DTOs y sistema de persistencia híbrido (base de datos SQL + caché local con Gson).</li>
                <li><strong>• Ingeniería de Software:</strong> Desarrollo en Java con enfoque en POO, programación asíncrona y consumo de APIs mediante Retrofit.</li>
                <li><strong>• Seguridad y Control de Versiones:</strong> Cifrado de datos mediante SHA-256 y gestión del código con Git.</li>
                <li><strong>• Testing:</strong> Aplicación de pruebas de caja negra y automatización de procesos de validación.</li>
                <li><strong>• UI/UX:</strong> Diseño de prototipos en Figma y su implementación en XML siguiendo principios de Material Design.</li>
            </ul>

            <a href="https://github.com/tu-usuario/wellnessgo" target="_blank" 
               style="display: inline-block; margin-top: 12px; color: #3498db; font-weight: bold; text-decoration: none; border: 1px solid #3498db; padding: 5px 12px; border-radius: 4px;">
               Ver en GitHub
            </a>

        </div>
    `,
    "color": "#3498db"
},
    "2027": {
        "title": "MotoGP Sports",
        "desc": "Desarrollo de sistemas críticos para la gestión de eventos internacionales y mantenimiento de infraestructuras de datos en tiempo real.",
        "color": "#e67e22"
    }
};

const slider = document.getElementById('yearSlider');
const points = document.querySelectorAll('.point');
const viewer = document.getElementById('detail-viewer');

function updateTimeline() {
    const currentYear = parseInt(slider.value);
    let hitoDetectado = false;

    points.forEach(point => {
        const pointYear = point.getAttribute('data-year');
        
        // Comprobamos si el slider está sobre el año del punto (+/- 1 de margen)
        if (Math.abs(currentYear - parseInt(pointYear)) <= 1) {
            
            if (!point.classList.contains('active')) {
                // Desactivar otros puntos primero para evitar solapamientos visuales
                points.forEach(p => p.classList.remove('active'));
                
                point.classList.add('active');
                
                // Extraer datos del objeto timelineData usando el año como clave
                const info = timelineData[pointYear];
                
                if (info) {
                    // Animación de salida y entrada
                    viewer.style.opacity = '0';
                    setTimeout(() => {
                        viewer.innerHTML = `<h3>${info.title} (${pointYear})</h3><p>${info.desc}</p>`;
                        viewer.style.borderLeftColor = info.color;
                        viewer.style.opacity = '1';
                    }, 150);
                }
            }
            hitoDetectado = true;
        } else {
            point.classList.remove('active');
        }
    });

    // Mensaje por defecto si no hay ningún hito cerca
    if (!hitoDetectado) {
        // Solo resetear si no es el mensaje de carga inicial
        if (viewer.querySelector('h3')) {
            viewer.style.opacity = '0';
            setTimeout(() => {
                viewer.innerHTML = "<p>Mueve el slider para navegar por mi historia profesional.</p>";
                viewer.style.borderLeftColor = "#333";
                viewer.style.opacity = '1';
            }, 150);
        }
    }
}

// Escuchar el movimiento del slider
slider.addEventListener('input', updateTimeline);

// Ejecutar al cargar
window.addEventListener('load', updateTimeline);

// Feedback táctil para móviles
slider.addEventListener('change', () => {
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10); 
    }
});