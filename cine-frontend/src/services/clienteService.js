const API_BASE_URL = "http://localhost:5000";

export const clienteService = {
  // Obtener todos los clientes
  async getClientes() {
    try {
      const response = await fetch(`${API_BASE_URL}/clientes`);
      if (!response.ok) {
        throw new Error("Error al obtener clientes");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching clientes:", error);
      throw error;
    }
  },

  // Obtener un cliente por ID
  async getClienteById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/clientes/${id}`);
      if (!response.ok) {
        throw new Error("Cliente no encontrado");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching cliente:", error);
      throw error;
    }
  },

  // Crear un nuevo cliente
  async createCliente(clienteData) {
    try {
      const response = await fetch(`${API_BASE_URL}/clientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteData),
      });
      if (!response.ok) {
        throw new Error("Error al crear cliente");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating cliente:", error);
      throw error;
    }
  },

  // Actualizar un cliente
  async updateCliente(id, clienteData) {
    try {
      const response = await fetch(`${API_BASE_URL}/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteData),
      });
      if (!response.ok) {
        throw new Error("Error al actualizar cliente");
      }
      return await response.json();
    } catch (error) {
      console.error("Error updating cliente:", error);
      throw error;
    }
  },

  // Eliminar un cliente
  async deleteCliente(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/clientes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      return true;
    } catch (error) {
      console.error("Error deleting cliente:", error);
      throw error;
    }
  },
};
