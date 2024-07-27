import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aplikasi penjualan UMKM",
    template: "%s | Aplikasi penjualan UMKM",
  },
  description:
    "Aplikasi penjualan UMKM yang dikembangkan menggunakan framework Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen bg-gray-300`}>
        {children}
      </body>
    </html>
  );
}
