import "./globals.css";
import { ThemeInit } from "../../.flowbite-react/init";

export const metadata = {
  title: "Cine App",
  description: "Aplicación de gestión de cine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
