"use client";

import { useEffect, useState } from "react";
import { Card, Badge, Spinner, Button, Alert } from "flowbite-react";
import { HiArrowLeft, HiPencil, HiTrash } from "react-icons/hi";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { clienteService } from "../../../services/clienteService";

export default function ClienteDetail() {
  const params = useParams();
  const router = useRouter();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCliente = async () => {
      try {
        setLoading(true);
        const data = await clienteService.getClienteById(params.id);
        setCliente(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      loadCliente();
    }
  }, [params.id]);

  const handleDelete = async () => {
    if (!confirm("¿Estás seguro de que quieres eliminar este cliente?")) {
      return;
    }

    try {
      await clienteService.deleteCliente(params.id);
      router.push("/clients");
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="xl" />
        <span className="ml-3">Cargando cliente...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Alert color="failure">
          <span className="font-medium">Error:</span> {error}
        </Alert>
        <div className="mt-4">
          <Link href="/clients">
            <Button color="gray">
              <HiArrowLeft className="mr-2 h-4 w-4" />
              Volver a Clientes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!cliente) {
    return (
      <div className="p-6">
        <Alert color="warning">
          <span className="font-medium">Cliente no encontrado</span>
        </Alert>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Link href="/clients">
            <Button color="gray" size="sm">
              <HiArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
          <h2 className="text-2xl font-bold">Detalle del Cliente</h2>
        </div>
        <div className="flex gap-2">
          <Button color="blue" size="sm">
            <HiPencil className="mr-2 h-4 w-4" />
            Editar
          </Button>
          <Button color="failure" size="sm" onClick={handleDelete}>
            <HiTrash className="mr-2 h-4 w-4" />
            Eliminar
          </Button>
        </div>
      </div>

      <Card className="max-w-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {cliente.nombre}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{cliente.email}</p>
          </div>
          <Badge color="blue">Cliente</Badge>
        </div>

        <div className="space-y-4">
          {/* Campos comentados - no disponibles en la API
          {cliente.telefono && (
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                Teléfono
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                📞 {cliente.telefono}
              </p>
            </div>
          )}

          {cliente.direccion && (
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                Dirección
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                📍 {cliente.direccion}
              </p>
            </div>
          )}
          */}

          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
              ID del Cliente
            </h4>
            <p className="text-gray-600 dark:text-gray-400 font-mono">
              {cliente.id}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
