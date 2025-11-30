# Catálogo de Películas — Plantilla Angular (Frontend) + Laravel (Backend)

Esta plantilla contiene un frontend en Angular y un backend en Laravel con un CRUD completo para un catálogo de películas.
Está pensada para que la subas a tu repositorio y continúes el desarrollo o la uses para entrega de tu PI.

---

## Estructura principal

- `frontend/` — aplicación Angular (código fuente listo, instalar dependencias con npm)
- `backend/`  — aplicación Laravel (migraciones, controlador, modelo, rutas, seeders)

## Instrucciones rápidas (local)

### Backend (Laravel)
1. Copia `.env.example` a `.env` y configura la conexión a tu BD.
2. Ejecuta `composer install` (requiere PHP y Composer).
3. Ejecuta `php artisan key:generate`.
4. Ejecuta migraciones y seed: `php artisan migrate --seed`.
5. Levanta el servidor: `php artisan serve` (por defecto en http://127.0.0.1:8000)

### Frontend (Angular)
1. En `frontend/` ejecuta `npm install` (requiere Node.js).
2. Levanta la app: `npm start` o `ng serve`.
3. La app está configurada para consumir la API en `http://localhost:8000/api`.

---

Si necesitas que lo ajuste a una estructura distinta o te lo prepare listo para producción (Docker, CI/CD, GitHub Actions), dime y lo preparo.

