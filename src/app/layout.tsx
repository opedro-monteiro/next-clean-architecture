import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS with clean architecture",
  description: "A simple NextJS app with clean architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
