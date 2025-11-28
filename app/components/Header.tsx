"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  const navItems = [
    { href: "#como-funciona", label: "Como Funciona", icon: "⚡" },
    { href: "#segmentos", label: "Segmentos", icon: "🏪" },
    { href: "#precos", label: "Preços", icon: "💰" },
  ];

  return (
    <>
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
            {navItems.map((item) => (
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
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              display: "none",
              background: scrolled
                ? "rgba(16, 185, 129, 0.1)"
                : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              padding: "0.7rem",
              borderRadius: "12px",
              zIndex: 1001,
              transition: "all 0.3s",
            }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            <div
              style={{
                width: "24px",
                height: "2px",
                background: scrolled ? "#10b981" : "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: sidebarOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: scrolled ? "#10b981" : "white",
                borderRadius: "2px",
                margin: "6px 0",
                transition: "all 0.3s",
                opacity: sidebarOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: scrolled ? "#10b981" : "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: sidebarOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
        </nav>

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
      </header>

      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          opacity: sidebarOpen ? 1 : 0,
          visibility: sidebarOpen ? "visible" : "hidden",
          transition: "all 0.3s ease",
          zIndex: 1100,
          backdropFilter: "blur(4px)",
        }}
        className="sidebar-overlay"
      />

      {/* Sidebar */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(85vw, 320px)",
          background: "white",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
          transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1200,
          display: "none",
          overflow: "auto",
        }}
        className="mobile-sidebar"
      >
        {/* Sidebar Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            padding: "2rem 1.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "100px",
              height: "100px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "-30px",
              width: "120px",
              height: "120px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "50%",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.6rem",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>🥝</span>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  Kiwi
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    color: "rgba(255,255,255,0.8)",
                    textTransform: "uppercase",
                  }}
                >
                  Cash
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.875rem",
                margin: 0,
              }}
            >
              Fidelidade que funciona
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: "1.5rem 0" }}>
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.5rem",
                color: "#1f2937",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 600,
                transition: "all 0.2s",
                borderLeft: "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(16, 185, 129, 0.08)";
                e.currentTarget.style.borderLeftColor = "#10b981";
                e.currentTarget.style.color = "#10b981";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderLeftColor = "transparent";
                e.currentTarget.style.color = "#1f2937";
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #e5e7eb, transparent)",
            margin: "0 1.5rem",
          }}
        />

        {/* CTA Section */}
        <div style={{ padding: "1.5rem" }}>
          <Link
            href="/loja/dashboard"
            onClick={() => setSidebarOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(16, 185, 129, 0.3)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(16, 185, 129, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(16, 185, 129, 0.3)";
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>🚀</span>
            <span>Entrar Agora</span>
          </Link>

          {/* Extra Info */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              background: "rgba(16, 185, 129, 0.05)",
              borderRadius: "12px",
              border: "1px solid rgba(16, 185, 129, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>✓</span>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#10b981",
                }}
              >
                Grátis até 50 clientes
              </span>
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#6b7280",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Comece agora sem custo inicial. Configure em apenas 5 minutos.
            </p>
          </div>
        </div>
      </aside>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .sidebar-overlay,
          .mobile-sidebar {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}