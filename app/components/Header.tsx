"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: scrolled ? "#1f2937" : "white",
        padding: scrolled ? "0.8rem 0" : "1rem 0",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled
          ? "0 4px 24px rgba(0, 0, 0, 0.08)"
          : "0 2px 20px rgba(16, 185, 129, 0.3)",
        backdropFilter: "blur(20px)",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
            transition: "all 0.3s",
            zIndex: 1001,
          }}
        >
          {/* Logo Container */}
          <div
            style={{
              background: scrolled
                ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                : "rgba(255,255,255,0.2)",
              padding: "0.5rem",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: scrolled
                ? "0 4px 12px rgba(16, 185, 129, 0.2)"
                : "0 2px 8px rgba(0,0,0,0.1)",
              border: scrolled ? "none" : "2px solid rgba(255,255,255,0.3)",
              transition: "all 0.3s",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            >
              🥝
            </span>
          </div>

          <div>
            <span
              style={{
                fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
                fontWeight: 800,
                letterSpacing: "0.5px",
                color: scrolled ? "#1f2937" : "white",
                transition: "all 0.3s",
              }}
            >
              Kiwi
            </span>
            <div
              style={{
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "1px",
                color: scrolled ? "#10b981" : "rgba(255,255,255,0.8)",
                marginTop: "-2px",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              Cash
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {[
            { href: "#como-funciona", label: "Como Funciona" },
            { href: "#segmentos", label: "Segmentos" },
            { href: "#precos", label: "Preços" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: scrolled ? "#4b5563" : "white",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.6rem 1.2rem",
                borderRadius: "12px",
                transition: "all 0.2s",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = scrolled
                  ? "rgba(16, 185, 129, 0.1)"
                  : "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = scrolled ? "#10b981" : "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = scrolled ? "#4b5563" : "white";
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "24px",
              background: scrolled
                ? "rgba(0,0,0,0.1)"
                : "rgba(255,255,255,0.3)",
              margin: "0 0.5rem",
            }}
          />

          {/* CTA Button */}
          <Link
            href="/loja/dashboard"
            style={{
              background: scrolled
                ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                : "white",
              color: scrolled ? "white" : "#059669",
              padding: "0.75rem 1.8rem",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: scrolled
                ? "0 4px 16px rgba(16, 185, 129, 0.3)"
                : "0 4px 16px rgba(0,0,0,0.15)",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = scrolled
                ? "0 8px 24px rgba(16, 185, 129, 0.4)"
                : "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = scrolled
                ? "0 4px 16px rgba(16, 185, 129, 0.3)"
                : "0 4px 16px rgba(0,0,0,0.15)";
            }}
          >
            Entrar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            zIndex: 1001,
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <div
            style={{
              width: "24px",
              height: "2px",
              background: scrolled ? "#1f2937" : "white",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: mobileMenuOpen
                ? "rotate(45deg) translateY(8px)"
                : "none",
            }}
          />
          <div
            style={{
              width: "24px",
              height: "2px",
              background: scrolled ? "#1f2937" : "white",
              borderRadius: "2px",
              margin: "6px 0",
              transition: "all 0.3s",
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: "24px",
              height: "2px",
              background: scrolled ? "#1f2937" : "white",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: mobileMenuOpen
                ? "rotate(-45deg) translateY(-8px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: scrolled ? "64px" : "72px",
          left: 0,
          right: 0,
          background: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          zIndex: 999,
          display: "none",
        }}
        className="mobile-menu"
      >
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[
            { href: "#como-funciona", label: "Como Funciona" },
            { href: "#segmentos", label: "Segmentos" },
            { href: "#precos", label: "Preços" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "#1f2937",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "1rem",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.2s",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(16, 185, 129, 0.1)";
                e.currentTarget.style.color = "#10b981";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1f2937";
              }}
            >
              {item.label}
            </Link>
          ))}

          <div
            style={{
              height: "1px",
              background: "#e5e7eb",
              margin: "0.5rem 0",
            }}
          />

          <Link
            href="/loja/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              padding: "1rem",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "1.1rem",
              textAlign: "center",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(16, 185, 129, 0.3)",
            }}
          >
            Entrar
          </Link>
        </div>
      </div>

      {/* Decorative gradient bar */}
      {!scrolled && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            opacity: 0.5,
          }}
        />
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
