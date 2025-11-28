"use client";

import Link from "next/link";

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: "white",
        padding: "clamp(6rem, 15vh, 10rem) 1rem clamp(4rem, 10vh, 6rem)",
        textAlign: "center",
        marginTop: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements - Mais sutis */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          fontSize: "clamp(6rem, 10vw, 10rem)",
          opacity: 0.08,
          transform: "rotate(15deg)",
          pointerEvents: "none",
        }}
      >
        🥝
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          fontSize: "clamp(5rem, 8vw, 8rem)",
          opacity: 0.08,
          transform: "rotate(-15deg)",
          pointerEvents: "none",
        }}
      >
        🥝
      </div>

      {/* Pattern overlay para mais profundidade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* Animated gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div className="animate-fade-in-up">
          {/* Logo/Brand com efeito sofisticado */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(255,255,255,0.15)",
              padding: "0.75rem 2rem",
              borderRadius: "50px",
              marginBottom: "2rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Shine effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                animation: "shine 3s ease-in-out infinite",
              }}
            />
            <span
              style={{ fontSize: "1.75rem", position: "relative", zIndex: 1 }}
            >
              🥝
            </span>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                position: "relative",
                zIndex: 1,
              }}
            >
              KIWI CASH
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.75rem)",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              margin: "0 auto 1.5rem",
              padding: "0 1rem",
            }}
          >
            Fidelidade que funciona.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(120deg, #fff 0%, #d1fae5 50%, #fff 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                animation: "gradient-shift 3s ease infinite",
              }}
            >
              Clientes que voltam.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              marginBottom: "1.25rem",
              opacity: 0.95,
              maxWidth: "600px",
              margin: "0 auto 1.25rem",
              lineHeight: 1.6,
              fontWeight: 400,
              padding: "0 1rem",
            }}
          >
            Sistema de pontos e recompensas completo para aumentar a recorrência
            do seu negócio.
          </p>

          {/* Badge do plano grátis com efeito pulse */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(255,255,255,0.2)",
              padding: "0.75rem 1.75rem",
              borderRadius: "50px",
              marginBottom: "2.5rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              fontWeight: 600,
              position: "relative",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50px",
                background: "rgba(255,255,255,0.3)",
                animation:
                  "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
            <span
              style={{ fontSize: "1.25rem", position: "relative", zIndex: 1 }}
            >
              ✓
            </span>
            <span style={{ position: "relative", zIndex: 1 }}>
              Grátis até 50 clientes
            </span>
          </div>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "4rem",
              padding: "0 1rem",
            }}
          >
            <button
              onClick={onRegisterClick}
              style={{
                background: "white",
                color: "#059669",
                padding: "1.25rem 2.5rem",
                borderRadius: "12px",
                fontWeight: 700,
                border: "none",
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minWidth: "220px",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
              }}
            >
              <span>Começar agora</span>
              <span style={{ fontSize: "1.25rem" }}>→</span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("como-funciona")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "white",
                padding: "1.25rem 2.5rem",
                borderRadius: "12px",
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.4)",
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backdropFilter: "blur(10px)",
                minWidth: "220px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              Como funciona
            </button>
          </div>

          {/* Value Props com efeito hover melhorado */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1rem",
              maxWidth: "900px",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "5 minutos",
                desc: "Para começar",
              },
              {
                icon: "🎯",
                title: "Qualquer setor",
                desc: "Varejo a serviços",
              },
              {
                icon: "📱",
                title: "100% web",
                desc: "Sem app ou hardware",
              },
              {
                icon: "💰",
                title: "Sem custo inicial",
                desc: "Grátis até 50 clientes",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  padding: "1.5rem 1rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  textAlign: "center",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.05)";
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.75rem",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    marginBottom: "0.35rem",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.825rem",
                    opacity: 0.9,
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof - Simplificado */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(2rem, 6vw, 4rem)",
              flexWrap: "wrap",
              opacity: 0.85,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                  background:
                    "linear-gradient(to bottom, #fff, rgba(255,255,255,0.8))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                5min
              </div>
              <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
                Setup completo
              </div>
            </div>
            <div
              style={{
                width: "1px",
                height: "40px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                  background:
                    "linear-gradient(to bottom, #fff, rgba(255,255,255,0.8))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                R$ 0
              </div>
              <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
                Para começar
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0%,
          100% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
