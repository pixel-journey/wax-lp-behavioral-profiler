import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Adds, removes, and holds',
  description: 'Churn when removes outnumber adds. Not a fee score and not an Alcor parse.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
