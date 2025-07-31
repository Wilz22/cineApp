"use client";

import { useEffect, useState } from "react";
import { Card, Badge, Spinner, Button, Alert } from "flowbite-react";
import { HiPlus, HiPencil, HiTrash, HiEye } from "react-icons/hi";
import Link from "next/link";
import { clienteService } from "../services/clienteService";
import ClienteForm from "./ClienteForm";

const ClientList = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingCliente, setEditingCliente] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const loadClientes = async () => {
    try {
      setLoading(true);
      const data = await clienteService.getClientes();
      setClientes(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClientes();
  }, []);

  const handleCreateCliente = async (clienteData) => {
    try {
      await clienteService.createCliente(clienteData);
      await loadClientes();
      setShowForm(false);
    } catch (error) {
      throw error;
    }
  };

  const handleUpdateCliente = async (clienteData) => {
    try {
      await clienteService.updateCliente(editingCliente.id, clienteData);
      await loadClientes();
      setEditingCliente(null);
      setShowForm(false);
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteCliente = async (id) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este cliente?")) {
      return;
    }

    try {
      setDeletingId(id);
      await clienteService.deleteCliente(id);
      await loadClientes();
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (cliente) => {
    setEditingCliente(cliente);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingCliente(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingCliente(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="xl" />
        <span className="ml-3">Cargando clientes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Alert color="failure">
          <span className="font-medium">Error:</span> {error}
        </Alert>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Clientes</h2>
        <div className="flex gap-2">
          <Button onClick={handleCreate} color="blue">
            <HiPlus className="mr-2 h-4 w-4" />
            Nuevo Cliente
          </Button>
          <Link href="/">
            <Button color="gray">Volver al Dashboard</Button>
          </Link>
        </div>
      </div>

      {clientes.length === 0 ? (
        <Card>
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No hay clientes registrados</p>
            <Button onClick={handleCreate} color="blue">
              <HiPlus className="mr-2 h-4 w-4" />
              Crear Primer Cliente
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientes.map((cliente) => (
            <Card
              key={cliente.id}
              className="hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cliente.nombre}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cliente.email}
                  </p>
                  {/* Campos comentados - no disponibles en la API
                  {cliente.telefono && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      📞 {cliente.telefono}
                    </p>
                  )}
                  {cliente.direccion && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      📍 {cliente.direccion}
                    </p>
                  )}
                  */}
                </div>
                <Badge color="blue">Cliente</Badge>
              </div>

              <div className="flex gap-2 mt-4">
                <Link href={`/clients/${cliente.id}`}>
                  <Button size="sm" color="info">
                    <HiEye className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="sm"
                  color="gray"
                  onClick={() => handleEdit(cliente)}
                >
                  <HiPencil className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  color="failure"
                  onClick={() => handleDeleteCliente(cliente.id)}
                  disabled={deletingId === cliente.id}
                >
                  {deletingId === cliente.id ? (
                    <Spinner size="sm" />
                  ) : (
                    <HiTrash className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <ClienteForm
        cliente={editingCliente}
        onSubmit={editingCliente ? handleUpdateCliente : handleCreateCliente}
        onCancel={handleCancel}
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </div>
  );
};

export default ClientList;
