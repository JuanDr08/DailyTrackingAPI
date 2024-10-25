# 🌤️ Daily Tracking API

## 🌍 Descripción

El proyecto **API de Registro de Actividades Diarias** tiene como objetivo crear una herramienta eficiente y flexible que permita a los usuarios organizar, registrar, y seguir su progreso en diversas actividades cotidianas. Esta API servirá como un sistema de gestión de tareas que incluye funcionalidades clave como el seguimiento de hábitos, establecimiento de metas, y generación de reportes de productividad. El enfoque principal es proporcionar a los usuarios una plataforma que les ayude a gestionar tanto sus tareas personales como profesionales, mejorando su organización y permitiendo un control detallado sobre su tiempo y prioridades.

Este proyecto **no es una versión final** 🛠️, está en constante desarrollo, y es un prototipo abierto a cambios para mejoras y optimización.

## ✨ Características

1. **Registro de Actividades**:

   - Los usuarios pueden registrar diferentes tipos de actividades diarias (trabajo, ejercicio, lectura, estudio, etc.).
   - Cada actividad puede tener atributos como nombre, descripción, prioridad, fecha y duración estimada.

2. **Seguimiento de Progreso**:

   - Los usuarios pueden actualizar el estado de las actividades (pendiente, en curso, completada).
   - Funcionalidad para visualizar el progreso de las actividades a lo largo del tiempo.
   - Gráficas que muestren estadísticas del porcentaje de actividades completadas en un periodo determinado (diario, semanal, mensual).

3. **Establecimiento de Metas**:

   - Los usuarios pueden establecer metas o desafíos relacionados con sus actividades, como "leer 30 páginas al día" o "hacer ejercicio 3 veces a la semana".
   - Almacenamiento y seguimiento de los hitos logrados.

4. **Categorías y Etiquetas**:

   - Los usuarios pueden agrupar actividades en categorías (por ejemplo: trabajo, personal, salud).
   - Funcionalidad para agregar etiquetas personalizadas a las actividades, facilitando su organización y búsqueda.

5. **Prioridades y Recordatorios**:

   - Sistema de prioridades para que el usuario pueda marcar actividades como "alta", "media" o "baja" prioridad.
   - Opción para configurar recordatorios o notificaciones sobre actividades pendientes, con alertas programadas.

6. **Visualización y Reportes**:

   - Generación de reportes que muestren el rendimiento del usuario en completar sus actividades a lo largo de una semana o mes.
   - Visualización de hábitos y estadísticas de tiempo dedicado a cada actividad o categoría.

7. **Sincronización Multidispositivo**:

   - Sincronización en tiempo real para que los usuarios puedan acceder a sus actividades desde cualquier dispositivo.
   - Funcionalidad para mantener el progreso actualizado en múltiples dispositivos.

8. **Colaboración** (Opcional):

   - Permitir que los usuarios compartan actividades con otros para colaborar en proyectos o tareas.

   - Funcionalidad para asignar actividades a otros usuarios o trabajar en equipo.

     

## 📁 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **Express**: Levantamiento de nuestra API y definicion rutas y endpoints
- **JWT**: Generacion de tokens para autenticar los usuarios desde los encabezados de las peticiones
- **MongoDB**: Motor de base de datos utilizado para la persistencia de datos
- **TypeScript**: Para mejorar la experiencia de desarrollo y mejorar la seguridad de nuestro código

## 🗂️ Archivos

Este diagrama refleja cómo están organizadas las carpetas y archivos principales dentro del proyecto:

```bash
DailyTrackingAPI/
│
├── server/
│   ├── application/
│   │   └── controller/
│   │       └── userController.ts
│   ├── domain/
│   │   ├── entities/
│   │       ├── acivity.ts
│   │   │   └── user.ts
│   │   ├── repositories/
│   │   │   ├── activityRepository.ts
│   │   │   └── userRepository.ts
│   │   └── services/
│   │       ├── activityService.ts
│   │       └── userService.ts
│   ├── infrastructure/
│   │       ├── httpInterceptors/
│   │       │   └── activityInterceptor.ts
│   │       │   └── userInterceptor.ts
│   │       ├── middlewares/
│   │       │   └── rateLimit.ts
│   │       ├── models/
│   │       │   ├── activityModel.ts
│   │       │   └── userModel.ts
│   │       ├── repositories/
│   │       │   ├── activityRepository.ts
│   │       │   └── userRepository.ts
│   │       ├── routes/
│   │       │   ├── activityRouter.ts
│   │       │   └── userRouter.ts
│   │       ├── validators/
│   │       │    ├── activityValidator.ts
│   │       │    └── userValidator.ts
│   │       ├── database.ts
│   │       ├── dependencies.ts
│   ├──  shared/
│   │    └── types.d.ts
│   └── app.ts
│
│── .gitignore
│── .env
│── package.json
├── tsconfig.json
└── README.md
```

## 💻 Instalación y Uso

Esta API puede utilizarse de la siguiente forma:

**Ejecución Local**: Puedes descargar el repositorio y ejecutarlo de manera local en tu equipo. Sigue estos pasos:

   - Clona el repositorio:
     ```bash
     git clone https://github.com/JuanDr08/DailyTrackingAPI.git
     ```
   - Navega a la carpeta del proyecto 📂
   
   - Ejecuta el comando `npm install` para instalar las dependencias del proyecto 📦
   - Deberas crear un archivo `.env` en la carpeta del proyecto con el siguiente contenido:
     ```bash
        MONGO_ACCESS=mongodb+srv://
        MONGO_USER=<usuario>
        MONGO_PWD=<contraseña>
        MONGO_HOST=<cluster>
        MONGO_DB_NAME=test
        KEY_SECRET=<secret_key>
     ```
   - Ejecuta el comando `npm start` para instalar las dependencias del proyecto
   - Espera hasta que en consola se vean los siguientes logis: `conexion exitosa y Server is running on port 3000`
   - Ahora podras navegar a la ruta `http://localhost:3000/` en tu navegador favorito y empezar a usar algunos de los endpoints 🌐
   - Para mayor comodidad es preferible que utilices un cliente de terminal como `Postman` o `Thunder Client` para probar los endpoints 📱  
   
   
**Requisitos**:
- Node.js v20.18.0
- Conexión a Internet si se ejecuta de manera local, ya que la aplicación obtiene los datos en tiempo real atraves de la base de datos MongoDB.

## ⚙️ Funcionamiento de la Aplicación

# *Limitantes*

1. Para el inicio de sesion solo se dispondra de *3 oportunidades*, si se fallan su ip sera bloqueada por 3 minutos.
2. Para toda peticion POST solo se dispondra de *45 oportunidades*, si se fallan su ip sera bloqueada por 15 minutos.
3. Para toda peticion GET solo se dispondra de *25 oportunidades*, si se fallan su ip sera bloqueada por 15 minutos.
4. Para toda peticion PUT solo se dispondra de *45 oportunidades*, si se fallan su ip sera bloqueada por 15 minutos.
5. Para toda peticion DELETE solo se dispondra de *10 oportunidades*, si se fallan su ip sera bloqueada por 10 minutos.

# *Endopoints*

## Registro de usuario

**Method** : `POST`

**URL** : `http://localhost:300/usuarios`

**Auth required** : `False`

**body** : 

```json
{
    "email": "jdro@gmail.com",
    "password": "123",
}
```

**Success Responses**

**Code** : `200 OK, 201 Created ...  `

```json
{
  "status": 200,
  "data": {
    "id": "671ae72d2e781362d67a0069",
    "email": "jdro@gmail.com"
  },
  "message": "Usuario registrado"
}
```

------

**Error** : ` 404 Not Found, 500 Internal Server Error ....  `

```json
{
    "status": 401,
    "message": "El usuario ya existe" | "Error al insertar usuario"
}
```

------