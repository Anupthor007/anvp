"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-base tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {profile.name.split(" ")[0].toLowerCase()}
          <span style={{ color: "var(--text-muted)" }}>
            .{profile.name.split(" ")[1].toLowerCase()}
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{
                  color: isActive
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                  fontFamily: "var(--font-mono, monospace)",
                }}
              >
                {isActive && (
                  <span style={{ color: "var(--green)" }}>{">"} </span>
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}