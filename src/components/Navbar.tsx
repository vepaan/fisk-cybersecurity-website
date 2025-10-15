"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "People", href: "/people" },
  { name: "Login", href: "/login" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="border-b bg-white sticky top-0 z-10">
      <div className="flex justify-center space-x-6 py-3">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium hover:text-blue-600 ${
              path === link.href ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
