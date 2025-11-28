"use client";

interface PricingProps {
  onRegisterClick: () => void;
}

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    features: [
      "Até 50 clientes",
      "Pontos ilimitados",
      "Dashboard básico",
      "1 loja",
      "Suporte por email",
    ],
    color: "#10b981",
    popular: true,
    highlight: "🎉 PERFEITO PRA COMEÇAR",
  },
  {
    name: "Crescimento",
    price: "R$ 79",
    period: "/mês",
    features: [
      "Até 1.000 clientes",
      "Pontos ilimitados",
      "Dashboard avançado",
      "Até 3 lojas",
      "Campanhas automáticas",
      "Suporte prioritário",
      "QR Code personalizado",
    ],
    color: "#059669",
    popular: false,
  },
  {
    name: "Profissional",
    price: "R$ 149",
    period: "/mês",
    features: [
      "Clientes ilimitados",
      "Pontos ilimitados",
      "Lojas ilimitadas",
      "API completa",
      "White Label",
      "Gerente de conta",
      "Suporte 24/7",
      "Integrações custom",
    ],
    color: "#0d9488",
    popular: false,
  },
];

export default function Pricing({ onRegisterClick }: PricingProps) {
  return (
    <section
      id="precos"
      style={{ padding: "5rem 2rem", background: "#f8f9fa" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            marginBottom: "1rem",
            color: "#059669",
            fontWeight: 800,
          }}
        >
          Planos Transparentes
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "#6b7280",
            maxWidth: "600px",
            margin: "0 auto 3rem" /* CORRIGIDO: margin em uma linha só */,
          }}
        >
          Comece grátis. Só pague quando crescer.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: plan.popular
                  ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                  : "white",
                color: plan.popular ? "white" : "#333",
                padding: "2.5rem",
                borderRadius: "25px",
                boxShadow: plan.popular
                  ? "0 15px 50px rgba(16,185,129,0.3)"
                  : "0 5px 25px rgba(0,0,0,0.08)",
                border: plan.popular ? "none" : "2px solid #e5e7eb",
                transform: plan.popular ? "scale(1.05)" : "scale(1)",
                position: "relative",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0,0,0,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 25px rgba(0,0,0,0.08)";
                }
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#fbbf24",
                    color: "#78350f",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    boxShadow: "0 5px 15px rgba(251,191,36,0.4)",
                  }}
                >
                  {plan.highlight}
                </div>
              )}

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {plan.name}
              </h3>

              <div
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                  lineHeight: 1,
                }}
              >
                {plan.price}
                <span
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    opacity: 0.8,
                    fontWeight: 500,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {plan.price === "R$ 0" && (
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                >
                  ✨ Sem cartão de crédito
                </p>
              )}

              <ul
                style={{
                  listStyle: "none",
                  marginBottom: "2rem",
                  marginTop: plan.price === "R$ 0" ? 0 : "2rem",
                }}
              >
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    style={{
                      padding: "0.7rem 0",
                      paddingLeft: "1.8rem",
                      position: "relative",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        color: plan.popular ? "white" : "#10b981",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={onRegisterClick}
                style={{
                  width: "100%",
                  background: plan.popular
                    ? "white"
                    : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: plan.popular ? "#059669" : "white",
                  padding: "1.2rem",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1rem",
                  transition: "all 0.3s",
                  boxShadow: plan.popular
                    ? "0 5px 20px rgba(0,0,0,0.15)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {plan.price === "R$ 0"
                  ? "Começar Grátis Agora"
                  : "Começar Teste Grátis"}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Rápido */}
        <div
          style={{
            maxWidth: "800px",
            margin: "4rem auto 0" /* CORRIGIDO: margin em uma linha só */,
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "2rem",
              color: "#1f2937",
            }}
          >
            Perguntas Frequentes
          </h3>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                q: "O plano grátis tem limite de tempo?",
                a: "Não! Você pode usar grátis para sempre com até 50 clientes.",
              },
              {
                q: "Preciso de cartão de crédito?",
                a: "Não para o plano grátis. Só pedimos cartão se você quiser upgrade.",
              },
              {
                q: "Posso cancelar quando quiser?",
                a: "Sim, sem burocracia. Seus dados ficam salvos por 90 dias.",
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  background: "white",
                  padding: "1.5rem",
                  borderRadius: "15px",
                  border: "2px solid #e5e7eb",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    color: "#1f2937",
                    fontSize: "1.05rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.q}
                </summary>
                <p
                  style={{
                    color: "#6b7280",
                    marginTop: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
