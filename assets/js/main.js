/**
 * Lógica para el CV Interactivo - Escala 2010-2027
 * Dinamismo por proximidad conservando descripciones originales.
 */
const timelineData = [
    {
        "percent": 17.6,
        "start": "Sept 2013",
        "end": "Jun 2015",
        "title": "Ciclo Medio Cocina y Gastronomía",
        "desc": `
            <div class="cabecera-experiencia">
                <img src="assets/img/cifp.jpg" class="logo-experiencia" alt="Logo CMCCG">
            <div class="textos-columna">  
                <span class="fecha-experiencia">Sept 2013 — Jun 2015</span>
                <h3 class="titulo-experiencia">Ciclo Medio Cocina y Gastronomía</h3>
                <span style="color: #bbb; font-size: 1.1rem; font-weight: 500;">
                        CIFP Manuel Antonio | Vigo
                    </span>
            </div>
        </div>
            <p class="descripcion-experiencia" style="font-size: 1.1rem;">Especialización en técnicas de cocina profesional y gestión de materias primas. Desarrollo de habilidades de trabajo bajo presión y organización.</p>
        `,
        "color": "#3498db"
    },
    {
        "percent": 29.4,
        "start": "Sept 2015",
        "end": "Jun 2017",
        "title": "Ciclo Superior de Dirección de Cocina",
        "desc": `
            <div class="cabecera-experiencia">
                <img src="assets/img/cifp.jpg" class="logo-experiencia" alt="Logo CSDC">
            <div class="textos-columna">    
                <span class="fecha-experiencia">Sept 2015 — Jun 2017</span>
                <h3 class="titulo-experiencia">Ciclo Superior de Dirección de Cocina</h3>
                <span style="color: #bbb; font-size: 1.1rem; font-weight: 500;">
                        CIFP Carlos Oroza | Pontevedra
                </span>
            </div>
        </div>
            <p class="descripcion-experiencia" style="font-size: 1.1rem;">Gestión integral de establecimientos hosteleros, control de costes, diseño de menús y liderazgo de brigadas de cocina.</p>
        `,
        "color": "#3498db"
    },
    {
        "percent": 47.0,
        "start": "Ene 2018",
        "end": "Ago 2018",
        "title": "Disfrutar",
        "desc": `
            <div class="cabecera-experiencia">
                <img src="assets/img/disfrutar.png" class="logo-experiencia" alt="Logo Disfrutar">
                <div class="textos-columna">
                    <span class="fecha-experiencia">ENE 2018 — AGO 2018</span>
                    <h3 class="titulo-experiencia">Disfrutar</h3>
                    <span style="color: #e67e22; font-size: 1.1rem; font-weight: bold; letter-spacing: 0.5px;">
                        Nº1 The World's 50 Best Restaurants | 3 Estrellas Michelin | 3 Soles Repsol
                    </span>
                </div>
            </div>
            <div class="timeline-detail-content">
                <p class="descripcion-experiencia" style="margin-bottom: 12px; font-size: 1.1rem;">
                    Ayudante de cocina en restaurante <strong>Disfrutar</strong>, colaborando en uno de los proyectos gastronómicos más influyentes a nivel global.
                </p>
                <ul style="list-style: none; padding-left: 0; font-size: 1.1rem; line-height: 1.6; color: #ccc;">
                    <li><strong>• Experiencia Multidisciplinar:</strong> Gestión y ejecución operativa en diversas partidas clave.</li>
                    <li><strong>• I+D y Creatividad:</strong> Participación activa en la partida de <strong>Creatividad</strong>, colaborando en el desarrollo de nuevas técnicas y conceptos gastronómicos.</li>
                    <li><strong>• Eventos Externos:</strong> Apoyo logístico y técnico en la gestión y realización de ponencias profesionales fuera del restaurante, representando la identidad y metodología del establecimiento.</li>
                </ul>
            </div>
        `,
        "color": "#e67e22"
    },
    {
        "percent": 82.3,
        "start": "Ene 2024",
        "end": "Feb 2026",
        "title": "Ciclo Superior DAM",
        "desc": `
            <div class="cabecera-experiencia">
                <img src="assets/img/IFP.png" class="logo-experiencia" alt="Logo DAM">
                <div class="textos-columna">  
                    <span class="fecha-experiencia">Ene 2024 — Feb 2026</span>
                    <h3 class="titulo-experiencia">Ciclo Superior DAM</h3>
                    <span style="color: #bbb; font-size: 1.1rem; font-weight: 500;">
                        IFP Innovación y Formación Profesional (Grupo Planeta) | Barcelona
                    </span>
                </div>
            </div>
            <div class="timeline-detail-content">
                <h4 style="color: #3498db; margin-bottom: 8px;">Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</h4>
                <p style="font-size: 1.1rem; margin-bottom: 12px;">
                    Especialización en desarrollo multiplataforma y arquitectura de software, con un enfoque práctico en la creación de soluciones eficientes, escalables y seguras.
                </p>
                <p style="font-size: 1.1rem; margin-bottom: 10px;">
                    Durante esta formación he consolidado una base técnica sólida en las siguientes áreas:
                </p>
                <ul style="list-style: none; padding-left: 0; font-size: 1.1rem; line-height: 1.6;">
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
    {
        "percent": 94.1,
        "start": "Feb 2026",
        "end": "Feb 2026",
        "title": "Proyecto Final DAM",
        "desc": `
            <div class="cabecera-experiencia">
                <img src="assets/img/wellnessgo.png" class="logo-experiencia" alt="Logo Proyecto">
                <div class="textos-columna">
                    <span class="fecha-experiencia">Feb 2026</span>
                    <h3 class="titulo-experiencia">Proyecto Final DAM</h3>
                </div>
            </div>
            <div class="timeline-detail-content">
                <h4 style="color: #3498db; margin: 15px 0 8px 0;">Proyecto Destacado: WellnessGo</h4>
                <p style="font-size: 1.1rem;">
                    Aplicación orientada a la conexión en tiempo real entre pacientes y profesionales de la salud, incorporando gestión inteligente de agendas y validación de documentación.
                </p>
                <ul style="list-style: none; padding-left: 0; font-size: 1.1rem; line-height: 1.6;">
                    <li><strong>• Ecosistema de Aplicaciones:</strong> Desarrollo de dos aplicaciones nativas (Cliente y Profesional) conectadas mediante una API REST centralizada.</li>
                    <li><strong>• Arquitectura:</strong> Implementación del patrón MVC, uso de DTOs y sistema de persistencia híbrido (base de datos SQL + caché local con Gson).</li>
                    <li><strong>• Ingeniería de Software:</strong> Desarrollo en Java con enfoque en POO, programación asíncrona y consumo de APIs mediante Retrofit.</li>
                    <li><strong>• Seguridad y Control de Versiones:</strong> Cifrado de datos mediante SHA-256 y gestión del código con Git.</li>
                    <li><strong>• Testing:</strong> Aplicación de pruebas de caja negra y automatización de procesos de validación.</li>
                    <li><strong>• UI/UX:</strong> Diseño de prototipos en Figma y su implementación en XML siguiendo principios de Material Design.</li>
                </ul>
                <a href="[github.com](https://github.com/wellnessgo/WellnessGo/tree/cli)" target="_blank" 
                   style="display: inline-block; margin-top: 12px; color: #3498db; font-weight: bold; text-decoration: none; border: 1px solid #3498db; padding: 5px 12px; border-radius: 4px;">
                   Ver en GitHub
                </a>
            </div>
        `,
        "color": "#3498db"
    },
    {
        "percent": 100,
        "start": "Mar 2026",
        "end": "Actualidad",
        "desc": `
            <div class="cabecera-experiencia">
                <img src="assets/img/motoGP.png" class="logo-experiencia" alt="Logo MotoGP">
                <div class="textos-columna">
                    <span class="fecha-experiencia">Mar 2026 — Actualidad</span>
                    <h3 class="titulo-experiencia">MotoGP Sports Entertainment Group</h3>
                    <span style="color: #bbb; font-size: 1.1rem;">Soporte Técnico e Infraestructura IoT</span>
                </div>
            </div>
            <div class="timeline-detail-content">
                <p class="descripcion-experiencia" style="margin-bottom: 12px; font-size: 1.1rem;">
                    Responsable del mantenimiento y optimización de sistemas críticos en tiempo real para el entorno de competición de <strong>MotoGP</strong>.
                </p>
                <ul style="list-style: none; padding-left: 0; font-size: 1.1rem; line-height: 1.7; color: #ccc;">
                    <li><strong>• Entornos Linux:</strong> Administración y despliegue sobre <strong>Debian</strong>, garantizando la estabilidad de servicios esenciales bajo alta demanda.</li>
                    <li><strong>• Ecosistema IoT & Hardware:</strong> Gestión de dispositivos Raspberry Pi para la sincronización de contenidos y monitorización de datos en tiempo real.</li>
                    <li><strong>• Conectividad y Redes:</strong> Supervisión de flujos de datos y mantenimiento de infraestructura conectada a servicios <strong>AWS</strong>.</li>
                    <li><strong>• Resolución de Incidencias:</strong> Diagnóstico rápido en entornos de producción donde la baja latencia y la alta disponibilidad son críticas.</li>
                </ul>
                
                <button onclick="openModal()" style="margin-top: 20px; background: #e67e22; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 10px; transition: transform 0.2s;">
                    <i class="fas fa-file-pdf" style="font-size: 1.2rem;"></i> Ver Carta de Recomendación
                </button>
            </div>
        `,
        "color": "#e67e22"
    }
];


// 2. ELEMENTOS DEL DOM
const slider = document.getElementById('yearSlider');
const viewer = document.getElementById('detail-viewer');
const points = document.querySelectorAll('.point');

let lastIndex = -1; 

// 3. FUNCIÓN DE ACTUALIZACIÓN DINÁMICA
function updateTimeline() {
    const currentVal = parseFloat(slider.value);
    
    // Buscamos el hito más cercano al valor del slider
    let closestIndex = 0;
    let minDistance = 101;

    timelineData.forEach((item, index) => {
        const distance = Math.abs(currentVal - item.percent);
        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
        }
    });

    // Solo actualizamos si hemos cambiado de hito para evitar parpadeos
    if (closestIndex !== lastIndex) {
        lastIndex = closestIndex;
        const info = timelineData[closestIndex];

        // Actualizar estados de los puntos en el HTML
        points.forEach(p => {
            if(parseInt(p.getAttribute('data-index')) === closestIndex) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });

        // Animación de salida y entrada del visor
        viewer.style.opacity = '0';
        
       setTimeout(() => {
            // Eliminamos la lógica de dateLabel y los elementos <h3>
            // para evitar la duplicidad, ya que ahora los incluimos en info.desc
            
            viewer.innerHTML = `
                <div class="detail-card-inner">
                    ${info.desc}
                </div>
            `;
            
            viewer.style.borderLeft = `5px solid ${info.color}`;
            viewer.style.opacity = '1';
        }, 150);
    }
}

// 4. LISTENERS
slider.addEventListener('input', updateTimeline);
window.addEventListener('load', updateTimeline);

// Feedback táctil para móviles
slider.addEventListener('change', () => {
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10); 
    }
});
function openModal() {
    document.getElementById('pdfModal').classList.add('active');
    // Bloquea el scroll de la web de fondo
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('pdfModal').classList.remove('active');
    // Devuelve el scroll a la normalidad
    document.body.style.overflow = 'auto';
}
