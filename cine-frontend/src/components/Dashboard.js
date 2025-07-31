"use client";

import { Button } from "flowbite-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-bold">Gestión de Cine</h1>
      </header>
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Bienvenido al Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2 text-black">
              Gestión de Clientes
            </h3>
            <p className="text-gray-600 mb-4">
              Administra la información de los clientes
            </p>
            <Link href="/clients">
              <Button color="blue">Ver Clientes</Button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2 text-black">Películas</h3>
            <p className="text-gray-600 mb-4">
              Gestiona el catálogo de películas
            </p>
            <Button color="gray" disabled>
              Próximamente
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2 text-black">Reservas</h3>
            <p className="text-gray-600 mb-4">
              Controla las reservas de asientos
            </p>
            <Button color="gray" disabled>
              Próximamente
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
