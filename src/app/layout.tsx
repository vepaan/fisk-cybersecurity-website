import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Fisk Cybersecurity Research",
  description: "Official website for Fisk University Cybersecurity Research",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
