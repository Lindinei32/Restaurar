// Arquivo: app/layout.js (ESTADO FINAL CORRETO)

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu Site",
  description: "Gerado com Next.js",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}