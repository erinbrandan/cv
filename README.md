# Interactive Professional Timeline & Portfolio 🚀

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Un CV interactivo y dinámico diseñado para mostrar mi trayectoria profesional de una manera visual e innovadora. Este proyecto sustituye el formato estático tradicional por una experiencia de usuario (UX) fluida basada en una línea de tiempo interactiva.

---

## 🌟 Características Principales

- **Timeline Dinámica:** Navegación por hitos profesionales mediante un slider personalizado.
- **Arquitectura de Datos Desacoplada:** El contenido se gestiona de forma independiente en un archivo `data.js`, facilitando el mantenimiento y la escalabilidad del contenido sin tocar la lógica del core.
- **Visualizador de Detalles:** Renderizado dinámico de contenido HTML complejo (listas, enlaces, formatos) basado en el año seleccionado.
- **Diseño Responsive:** Adaptado para una visualización óptima tanto en desktop como en dispositivos móviles.
- **Interfaz Moderna:** Estética oscura (Dark Mode) con acentos de color coherentes con mi identidad profesional.

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una estructura limpia para asegurar que el código sea fácil de leer y actualizar:

```text
/cv-interactivo
│
├── index.html          # Estructura base y contenedores del visor
├── css/
│   └── style.css       # Estilos, animaciones de hover y diseño de tarjetas
└── js/
    ├── data.js         # "Base de datos" de hitos (Contenido técnico/profesional)
    └── main.js         # Lógica de control del slider, eventos y renderizado
