"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          backgroundColor: "rgba(8,8,8,0.82)",
          backdropFilter: "saturate(120%) blur(22px)",
          WebkitBackdropFilter: "saturate(120%) blur(22px)",
          boxShadow: "0 10px 26px rgba(0,0,0,0.34)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            anup
            <span style={{ color: "var(--text-muted)" }}>.thorat</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    textDecoration: "none",
                    fontFamily: "var(--font-mono)",
                    transition: "color 0.2s",
                  }}
                >
                  {isActive && (
                    <span style={{ color: "var(--green)", marginRight: "4px" }}>›</span>
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--text-secondary)",
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--text-secondary)",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--text-secondary)",
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t px-6 py-5 flex flex-col gap-4"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "rgba(10,10,10,0.97)",
            }}
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: "15px",
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    textDecoration: "none",
                    fontFamily: "var(--font-mono)",
                    paddingBottom: "4px",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {isActive && (
                    <span style={{ color: "var(--green)", marginRight: "6px" }}>›</span>
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}