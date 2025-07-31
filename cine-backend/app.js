const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerDefinition");
const clientesRoutes = require("./routes/clientesRoutes");

const app = express();

// Middleware para CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use("/clientes", clientesRoutes);

app.listen(5000, () => {
  console.log("Servidor ejecutándose en http://localhost:5000");
});
