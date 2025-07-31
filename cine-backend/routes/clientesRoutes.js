// routes/clientesRoutes.js
const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");

/**
 * @swagger
 * /clientes:
 *   get:
 *     description: Obtener todos los clientes
 *     responses:
 *       200:
 *         description: Lista de todos los clientes
 */
router.get("/", clientesController.getAllClientes);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     description: Obtener un cliente por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente no encontrado
 */
router.get("/:id", clientesController.getClienteById);

/**
 * @swagger
 * /clientes:
 *   post:
 *     description: Crear un nuevo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente creado
 *       400:
 *         description: Error en la creación del cliente
 */
router.post("/", clientesController.createCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     description: Actualizar un cliente
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del cliente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente actualizado
 *       400:
 *         description: Error al actualizar el cliente
 *       404:
 *         description: Cliente no encontrado
 */
router.put("/:id", clientesController.updateCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     description: Eliminar un cliente
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del cliente a eliminar
 *     responses:
 *       200:
 *         description: Cliente eliminado
 *       404:
 *         description: Cliente no encontrado
 */
router.delete("/:id", clientesController.deleteCliente);

module.exports = router;
