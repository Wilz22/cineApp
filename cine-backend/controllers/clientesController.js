// controllers/clientesController.js
const db = require("../config/db");

/**
 * @swagger
 * /clientes:
 *   get:
 *     description: Obtener todos los clientes
 *     responses:
 *       200:
 *         description: Lista de todos los clientes
 */
exports.getAllClientes = (req, res) => {
  db.query("SELECT * FROM clientes", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener los clientes" });
    }
    res.json(results);
  });
};

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
exports.getClienteById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM clientes WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener el cliente" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json(results[0]);
  });
};

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
exports.createCliente = (req, res) => {
  const { nombre, email } = req.body;
  const query = "INSERT INTO clientes (nombre, email) VALUES (?, ?)";
  db.query(query, [nombre, email], (err, results) => {
    if (err) {
      return res.status(400).json({ error: "Error al crear el cliente" });
    }
    res.status(201).json({ message: "Cliente creado", id: results.insertId });
  });
};

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
exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  const query = "UPDATE clientes SET nombre = ?, email = ? WHERE id = ?";
  db.query(query, [nombre, email, id], (err, results) => {
    if (err) {
      return res.status(400).json({ error: "Error al actualizar el cliente" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json({ message: "Cliente actualizado" });
  });
};

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
exports.deleteCliente = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM clientes WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar el cliente" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json({ message: "Cliente eliminado" });
  });
};
