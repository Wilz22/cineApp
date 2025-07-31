# CineApp Backend

Este es el backend de la aplicación **CineApp**, desarrollado con **Node.js**, **Express** y **Sequelize** para gestionar la base de datos de un cine, incluyendo funcionalidades como la gestión de clientes, películas, funciones, entradas, empleados, entre otros.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir el servidor web y manejar las rutas.
- **Sequelize**: ORM para interactuar con la base de datos MySQL.
- **Swagger**: Herramienta para la documentación de la API.
- **MySQL**: Sistema de gestión de bases de datos relacional.

## Requisitos

1. **Node.js**: Asegúrate de tener **Node.js v16** o superior instalado en tu máquina.
2. **MySQL**: Debes tener una instancia de **MySQL** corriendo. Asegúrate de crear la base de datos `cine` con las tablas adecuadas.

## Instalación

Sigue estos pasos para poner en marcha el backend de **CineApp**:

### 1. Clonar el repositorio

```bash
git clone https://github.com/Wilz22/cineapp-backend.git
cd cineapp-backend
npm install
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar backend

```bash
node app.js
```

### 4. Acceder a la documentación de la API

La documentación de la API generada con Swagger estará disponible en:

```bash
http://localhost:3000/api-docs
```

# Cine App - Frontend

Aplicación de gestión de cine construida con Next.js 15, React 19, Tailwind CSS y Flowbite React.

## 🚀 Características

### CRUD Completo de Clientes

- ✅ **Crear** nuevos clientes
- ✅ **Leer** lista de clientes y detalles individuales
- ✅ **Actualizar** información de clientes
- ✅ **Eliminar** clientes
- ✅ **Vista detallada** de cada cliente

### Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **Tailwind CSS 3** - Framework de CSS
- **Flowbite React** - Componentes de UI
- **React Icons** - Iconografía

## 📋 Requisitos

- Node.js 18+
- API backend corriendo en `http://localhost:5000`

## 🛠️ Instalación

1. **Clonar el repositorio**

```bash
git clone <tu-repositorio>
cd cine-frontend
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar la API**
   Asegúrate de que tu API backend esté corriendo en `http://localhost:5000` con los siguientes endpoints:

- `GET /clientes` - Obtener todos los clientes
- `GET /clientes/:id` - Obtener cliente por ID
- `POST /clientes` - Crear nuevo cliente
- `PUT /clientes/:id` - Actualizar cliente
- `DELETE /clientes/:id` - Eliminar cliente

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

5. **Abrir en el navegador**

```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.js          # Layout principal
│   ├── page.js            # Página principal
│   └── clients/           # Páginas de clientes
│       ├── page.js        # Lista de clientes
│       └── [id]/          # Detalle de cliente
│           └── page.js
├── components/            # Componentes React
│   ├── Dashboard.js       # Dashboard principal
│   ├── ClientList.js      # Lista de clientes
│   └── ClienteForm.js     # Formulario de cliente
└── services/              # Servicios de API
    └── clienteService.js  # Servicio de clientes
```

## 🔧 Funcionalidades

### Dashboard Principal (`/`)

- Vista general del sistema
- Navegación a diferentes módulos
- Diseño responsive

### Gestión de Clientes (`/clients`)

- **Lista de clientes** con cards informativas
- **Botón "Nuevo Cliente"** para crear registros
- **Botones de acción** en cada card:
  - 👁️ **Ver detalle** - Navega a `/clients/[id]`
  - ✏️ **Editar** - Abre modal de edición
  - 🗑️ **Eliminar** - Confirma y elimina

### Detalle de Cliente (`/clients/[id]`)

- **Información completa** del cliente
- **Botones de acción** para editar/eliminar
- **Navegación** de regreso a la lista

### Formulario de Cliente

- **Modal responsive** para crear/editar
- **Validación de campos** requeridos
- **Campos incluidos**:
  - Nombre (requerido)
  - Email (requerido)
  - Teléfono (opcional)
  - Dirección (opcional)

## 🎨 Diseño

- **Tema claro/oscuro** automático
- **Componentes Flowbite** para UI consistente
- **Responsive design** para móviles y desktop
- **Iconografía** con React Icons
- **Animaciones** suaves y transiciones

## 🚀 Scripts Disponibles

```bash
npm run dev      # Desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting del código
```

## 🔗 Endpoints de la API

La aplicación espera que tu API backend tenga estos endpoints:

| Método | Endpoint        | Descripción                |
| ------ | --------------- | -------------------------- |
| GET    | `/clientes`     | Obtener todos los clientes |
| GET    | `/clientes/:id` | Obtener cliente por ID     |
| POST   | `/clientes`     | Crear nuevo cliente        |
| PUT    | `/clientes/:id` | Actualizar cliente         |
| DELETE | `/clientes/:id` | Eliminar cliente           |

### Formato de Datos

**Cliente:**

```json
{
  "id": 1,
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "telefono": "+34 123 456 789",
  "direccion": "Calle Mayor 123, Madrid"
}
```

## 🐛 Solución de Problemas

### Si los estilos no se aplican:

1. Verifica que Tailwind CSS esté instalado correctamente
2. Asegúrate de que `globals.css` esté importado en `layout.js`
3. Revisa la configuración de `tailwind.config.js`

### Si la API no responde:

1. Verifica que el backend esté corriendo en `http://localhost:5000`
2. Revisa los logs del servidor para errores
3. Confirma que los endpoints estén implementados correctamente

## 📝 Próximas Funcionalidades

- [ ] Gestión de películas
- [ ] Sistema de reservas
- [ ] Autenticación de usuarios
- [ ] Dashboard con estadísticas
- [ ] Búsqueda y filtros avanzados

---

¡Disfruta usando tu aplicación de gestión de cine! 🎬
