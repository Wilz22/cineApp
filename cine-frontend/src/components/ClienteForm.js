"use client";

import { useState, useEffect } from "react";
import { Button } from "flowbite-react";

const ClienteForm = ({
  cliente = null,
  onSubmit,
  onCancel,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    // telefono: "",
    // direccion: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cliente) {
      setFormData({
        nombre: cliente.nombre || "",
        email: cliente.email || "",
        // telefono: cliente.telefono || "",
        // direccion: cliente.direccion || "",
      });
    } else {
      setFormData({
        nombre: "",
        email: "",
        // telefono: "",
        // direccion: "",
      });
    }
  }, [cliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(formData);
      setFormData({
        nombre: "",
        email: "",
        // telefono: "",
        // direccion: "",
      });
      onClose();
    } catch (error) {
      console.error("Error al guardar cliente:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {cliente ? "Editar Cliente" : "Nuevo Cliente"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Nombre completo"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@ejemplo.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Campos comentados - no disponibles en la API
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+34 123 456 789"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="direccion"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Dirección
              </label>
              <input
                id="direccion"
                name="direccion"
                type="text"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle, Ciudad, País"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            */}
          </div>

          <div className="flex gap-2 mt-6">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Guardando..." : cliente ? "Actualizar" : "Crear"}
            </Button>
            <Button color="gray" onClick={onCancel} className="flex-1">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteForm;
