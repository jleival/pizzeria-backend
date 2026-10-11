<div align="center">

# 🍕 Pizzería Mamma Mía - Backend API

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

API REST desarrollada con Node.js y Express para gestionar la lógica de negocio, catálogo de pizzas, autenticación de usuarios mediante JSON Web Tokens (JWT) y procesamiento de pedidos (checkout), diseñada para enlazarse de forma segura con el frontend.

</div>

---

## 🚀 Endpoints Principales

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/pizzas` | Obtiene el listado completo de pizzas disponibles. |
| `GET` | `/api/pizzas/:id` | Obtiene el detalle de una pizza específica. |
| `POST` | `/api/auth/login` | Autentica un usuario y retorna un token JWT. |
| `POST` | `/api/auth/register` | Registra un nuevo usuario en la base de datos local. |
| `GET` | `/api/auth/me` | Retorna los datos del usuario autenticado (Requiere Token). |
| `POST` | `/api/checkouts` | Procesa y valida el pedido del carrito de compras. |

---

## 🛠️ Tecnologías y Dependencias

- **Runtime:** Node.js
- **Framework:** Express.js
- **Seguridad:** JWT (`jsonwebtoken`), CORS habilitado para conexión frontend.
- **Utilidades:** Dotenv, Nodemon (entorno de desarrollo).

---

## ⚙️ Configuración y Ejecución Local

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/pizzeria-backend.git
   cd pizzeria-backend
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto basándote en la siguiente estructura:
   ```env
   PORT=4000
   JWT_SECRET=tu_clave_secreta_jwt
   ```

4. **Inicia el servidor en modo desarrollo:**
   ```bash
   npm run dev
   ```

---

## 🌐 Despliegue en Render

Este backend se encuentra optimizado para producción en **Render**. 
- **Comando de inicio (Start Command):** `node index.js`
- **Variables de Entorno en Render:** Asegúrate de configurar `JWT_SECRET` en el panel de control de tu servicio en Render.
