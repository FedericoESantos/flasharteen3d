# 🧱 Impresiones 3D - E-commerce React

Bienvenido al **Flash Arte en 3D**, un emprendimiento dedicado a la creación y venta de productos personalizados impresos en 3D.  
Este sitio permite explorar modelos, ver imágenes y videos, aprovechar promociones y realizar compras en línea con un carrito dinámico y envío automático de pedidos por correo electrónico.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React + Vite** → Frontend rápido y modular.  
- 🛒 **Context API** → Manejo global del carrito de compras.  
- 💌 **EmailJS** → Envío automático de los pedidos por correo electrónico.  
- 🌐 **Netlify** → Hosting y despliegue continuo.  
- 🎞️ **React Router DOM** → Navegación por rutas.  
- 💅 **CSS puro / App.css** → Estilos personalizados.

---

## 🧭 Funcionalidades principales

### 🏠 Página de inicio
- Bienvenida con mensaje introductorio y secciones destacadas.
- Presentación de productos y novedades del emprendimiento.
- Carrusel de imagenes de los productos destacados.

### 🛍️ Tienda / Catálogo
- Listado de productos organizados por categorías.
- Filtro por categoría desde la barra de navegación.
- Vista detallada de cada producto.

### 🧾 Carrito de compras
- Agregar, eliminar y vaciar productos.
- Cálculo automático del total.
- Envío del pedido vía EmailJS con todos los datos del cliente y el detalle de la compra.

### 🧑‍💻 Checkout
- Formulario estético y validado para ingresar nombre, email y teléfono.
- Generación automática de un código único de pedido.
- Envío de un correo con el resumen completo de la compra (productos, cantidad, total e ID de validación).

### 🖼️ Galería multimedia
- Sección dedicada a **imágenes** y **videos** de los proyectos realizados.
- Categorías para organizar contenido visual.

### 💸 Promociones y novedades
- Espacio para mostrar descuentos, nuevas piezas y eventos especiales.

### 🏢 Empresa / Contacto / Medios de pago
- Información institucional del emprendimiento.
- Formulario de contacto para consultas.
- Información sobre los métodos de pago aceptados.

---

## 🧩 Estructura de carpetas principal

src/
├── components/
│ ├── Cart/
│ ├── CheckOut/
│ ├── Category/
│ ├── Context/
│ ├── Empresa/
│ ├── Footer/
│ ├── Home/
│ ├── Imagenes/
│ ├── ItemDetail/
│ ├── ItemListContainer/
│ ├── Loader/
│ ├── NavBar/
│ ├── Promociones/
│ ├── Videos/
│ └── ...otros componentes
│
├── App.jsx
├── App.css
└── main.jsx

---

## ⚙️ Configuración de entorno

Antes de ejecutar el proyecto, crea un archivo `.env` en la raíz del proyecto y agrega tus claves de EmailJS:

```bash
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
⚠️ Estas variables se configuran también dentro de Netlify (en Site settings → Environment variables).

🧠 Instalación y uso
Clonar el repositorio

bash
Copiar código
git clone https://github.com/tuusuario/nombre-repo.git
Instalar dependencias

bash
Copiar código
npm install
Ejecutar el proyecto en modo desarrollo

bash
Copiar código
npm run dev
Compilar para producción

bash
Copiar código
npm run build
Desplegar en Netlify

Conecta el repositorio.

Define las variables de entorno.

Netlify se encargará del deploy automático.

✉️ Flujo del Checkout
El usuario completa su nombre, email y teléfono.

Se genera un código único de pedido.

EmailJS envía automáticamente un correo con:

Nombre y datos del comprador

Lista de productos con sus IDs y cantidades

Total de la compra

Código de validación

El carrito se vacía y se muestra un mensaje de agradecimiento.

💡 Próximas mejoras
🔐 Autenticación de usuarios (login / registro).

💳 Integración con pasarelas de pago.

🧰 Panel de administración para cargar nuevos modelos.

🌈 Personalizador de colores o materiales 3D.

👨‍💻 Desarrollado por
Federico Eduardo Santos – Programador Web Full Stack
🖥️ Enfocado en crear soluciones digitales completas, intuitivas y funcionales.

🧾 Licencia
Este proyecto es de uso libre para fines educativos y de portafolio.
© 2025 - Impresiones 3D

---








Dijiste:
dale barbaro listo para copiar y pegar en el archivo



ChatGPT dijo:
Perfecto 💪, acá tenés el README.md completo, bien estructurado, listo para copiar y pegar directamente en tu proyecto:

markdown
Copiar código
# 🧩 E-Commerce 3D Prints

Bienvenido al **E-Commerce de impresiones 3D**, un emprendimiento digital dedicado a ofrecer productos personalizados impresos en 3D, con una experiencia moderna y fácil de usar.  
La aplicación incluye **carrito de compras**, **galería multimedia (imágenes y videos)**, **promociones**, **novedades** y **contacto directo** con el cliente.

---

## 🚀 Tecnologías utilizadas

- **React.js** (Vite)
- **React Router DOM** – para la navegación entre rutas.
- **EmailJS** – para el envío automático de correos al finalizar la compra.
- **Context API** – para la gestión global del carrito de compras.
- **CSS personalizado (App.css)** – para el diseño y estilos de la app.

---

## 🛒 Funcionalidades principales

### 🏠 Página principal
- Presentación del emprendimiento con un mensaje de bienvenida.
- Acceso rápido a categorías, galería y promociones.

### 🧱 Catálogo de productos
- Visualización de productos organizados por categoría.
- Detalle individual de cada producto con su descripción, precio e imagen.
- Agregar productos al carrito con control de cantidad.

### 🛍️ Carrito de compras
- Ver productos seleccionados, cantidades y precios.
- Eliminar productos individualmente o vaciar el carrito completo.
- Cálculo automático del total de la compra.

### 📦 Checkout
- Formulario para ingresar datos de contacto (nombre, email y teléfono).
- Envío del pedido mediante **EmailJS**.
- Generación de un **código de validación único**.
- Limpieza automática del carrito tras la compra.

### 🎥 Galería multimedia
- Sección con **imágenes** y **videos** de proyectos y modelos impresos.
- Navegación clara entre ambos tipos de contenido.

### 💡 Promociones y novedades
- Muestra de descuentos, ofertas o lanzamientos especiales.

### 💬 Contacto
- Formulario directo para comunicación personalizada con el cliente.

---

## 🧭 Estructura del proyecto

```plaintext
src/
│
├── components/
│   ├── Cart/                → Carrito de compras
│   ├── CheckOut/            → Formulario de compra y envío de email
│   ├── Context/             → CartContext para manejar el estado global
│   ├── NavBar/              → Barra de navegación principal
│   ├── Footer/              → Pie de página con enlaces
│   ├── Home/                → Página de inicio
│   ├── Category/            → Listado de categorías de productos
│   ├── ItemDetail/          → Detalle de producto individual
│   ├── ItemListContainer/   → Contenedor de productos por categoría
│   ├── CategoryMultimedia/  → Selector de tipo de galería
│   ├── Imagenes/            → Galería de imágenes
│   ├── Videos/              → Galería de videos
│   ├── Promociones/         → Sección de promociones
│   ├── Empresa/             → Información sobre el emprendimiento
│   ├── Contacto/            → Formulario de contacto
│   ├── MediosPago/          → Información sobre métodos de pago
│   ├── Loader/              → Componente de carga
│   └── Error/               → Página de error 404
│
├── App.jsx                  → Rutas principales del sitio
├── App.css                  → Estilos globales
└── main.jsx                 → Punto de entrada de la aplicación
⚙️ Variables de entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables de configuración para EmailJS:

env
Copiar código
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
Estas claves se obtienen desde tu cuenta de EmailJS.

🧩 Instalación y uso
Cloná el repositorio

bash
Copiar código
git clone https://github.com/tuusuario/ecommerce-3d.git
cd ecommerce-3d
Instalá las dependencias

bash
Copiar código
npm install
Configurá el entorno

Agregá tu archivo .env con las claves de EmailJS.

Ejecutá el proyecto

bash
Copiar código
npm run dev
Abrí el navegador en
👉 http://localhost:5173

📫 Contacto
Si querés conocer más sobre el proyecto o colaborar:

💻 Desarrollado por: Fede
📧 Email: tuemail@ejemplo.com
🌐 Proyecto: E-Commerce 3D Prints

🧠 Licencia
Este proyecto se distribuye bajo la licencia MIT, lo que permite su uso, modificación y distribución libremente con fines educativos o comerciales.