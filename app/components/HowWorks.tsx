'use client'

const steps = [
  {
    step: '1',
    title: 'Cadastre Sua Empresa',
    desc: 'Crie sua conta em 2 minutos. Grátis por 30 dias.',
    icon: '🏪'
  },
  {
    step: '2',
    title: 'Configure as Regras',
    desc: 'Defina quantos pontos por real gasto e os prêmios.',
    icon: '⚙️'
  },
  {
    step: '3',
    title: 'Registre Compras',
    desc: 'Digite CPF/telefone do cliente e o valor da compra.',
    icon: '💳'
  },
  {
    step: '4',
    title: 'Cliente Acumula',
    desc: 'Pontos são creditados automaticamente no sistema.',
    icon: '⭐'
  },
  {
    step: '5',
    title: 'Cliente Resgata',
    desc: 'Na próxima visita, usa os pontos para ganhar benefícios.',
    icon: '🎁'
  },
  {
    step: '6',
    title: 'Você Fideliza!',
    desc: 'Cliente volta sempre para não perder os pontos.',
    icon: '🔄'
  }
]

export default function HowWorks() {
  return (
    <section 
      id="como-funciona" 
      style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)', 
        background: '#f9fafb',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern - Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(16, 185, 129, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(16, 185, 129, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Linhas diagonais */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 80px,
            rgba(16, 185, 129, 0.04) 80px,
            rgba(16, 185, 129, 0.04) 81px
          )
        `,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Floating shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />

      {/* Dots pattern */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '3%',
        width: '120px',
        height: '120px',
        backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 2px, transparent 2px)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none',
        opacity: 0.6,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            padding: '0.65rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(16,185,129,0.25)'
          }}>
            PROCESSO SIMPLES
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem',
            color: '#1f2937',
            fontWeight: 800,
            lineHeight: 1.2,
            padding: '0 1rem'
          }}>
            Como Funciona em{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              6 Passos
            </span>
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: '#6b7280',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.7,
            padding: '0 1rem'
          }}>
            Um fluxo intuitivo que torna a fidelização simples para você e seus clientes
          </p>
        </div>

        {/* Timeline - Responsiva */}
        <div className="timeline-container" style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Linha da timeline - responsiva */}
          <div className="timeline-line" />

          {/* Steps */}
          {steps.map((item, i) => (
            <div 
              key={i} 
              className="timeline-step"
              style={{
                position: 'relative',
                marginBottom: i === steps.length - 1 ? 0 : 'clamp(2.5rem, 5vw, 4rem)',
                zIndex: 1
              }}
            >
              {/* Círculo na timeline */}
              <div className="timeline-circle">
                {item.step}
              </div>

              {/* Card */}
              <div className="timeline-card">
                {/* Seta conectora - só desktop */}
                <div className="timeline-arrow" />

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'clamp(0.75rem, 2vw, 1rem)'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                    width: 'clamp(50px, 12vw, 60px)',
                    height: 'clamp(50px, 12vw, 60px)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    flexShrink: 0,
                    boxShadow: '0 8px 20px rgba(16,185,129,0.2)',
                    border: '2px solid rgba(16,185,129,0.2)'
                  }}>
                    {item.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                      fontWeight: 700,
                      color: '#1f2937',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 'clamp(0.875rem, 2.2vw, 0.95rem)',
                      color: '#6b7280',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <button
            onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 5vw, 3rem)',
              borderRadius: '50px',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 12px 35px rgba(16,185,129,0.3)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              width: 'auto',
              maxWidth: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(16,185,129,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(16,185,129,0.3)'
            }}
          >
            <span>Começar Agora</span>
            <span style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        /* MOBILE FIRST - Padrão */
        .timeline-line {
          position: absolute;
          left: 28px;
          top: 40px;
          bottom: 40px;
          width: 3px;
          background: linear-gradient(180deg, #10b981, #059669);
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(16,185,129,0.3);
          z-index: 0;
        }

        .timeline-step {
          display: flex;
          align-items: flex-start;
          padding-left: 80px;
        }

        .timeline-circle {
          position: absolute;
          left: 0;
          top: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          box-shadow: 0 0 0 6px white, 0 8px 25px rgba(16,185,129,0.4);
          z-index: 2;
          border: 3px solid white;
          transition: all 0.3s ease;
        }

        .timeline-circle:active {
          transform: scale(1.1);
        }

        .timeline-card {
          width: 100%;
          background: white;
          padding: clamp(1.5rem, 3vw, 2rem);
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border: 2px solid #f3f4f6;
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-card:active {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(16,185,129,0.2);
          border-color: #10b981;
        }

        .timeline-arrow {
          position: absolute;
          left: -12px;
          top: 28px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 12px solid white;
          filter: drop-shadow(-2px 0 4px rgba(0,0,0,0.08));
        }

        /* TABLET - 768px+ */
        @media (min-width: 768px) {
          .timeline-line {
            left: 40px;
            width: 4px;
          }

          .timeline-step {
            padding-left: 120px;
          }

          .timeline-circle {
            left: 12px;
            width: 64px;
            height: 64px;
            font-size: 1.75rem;
          }

          .timeline-arrow {
            left: -15px;
            top: 30px;
            border-top: 12px solid transparent;
            border-bottom: 12px solid transparent;
            border-right: 15px solid white;
          }
        }

        /* DESKTOP - 900px+ Timeline Alternada */
        @media (min-width: 900px) {
          .timeline-line {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-step {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 0;
          }

          .timeline-step:nth-child(odd) {
            justify-content: flex-start;
          }

          .timeline-step:nth-child(even) {
            justify-content: flex-end;
          }

          .timeline-step:nth-child(odd) .timeline-card {
            width: calc(50% - 60px);
            margin-right: auto;
          }

          .timeline-step:nth-child(even) .timeline-card {
            width: calc(50% - 60px);
            margin-left: auto;
          }

          /* Setas alternadas */
          .timeline-step:nth-child(odd) .timeline-arrow {
            left: auto;
            right: -20px;
            border-right: none;
            border-left: 20px solid white;
          }

          .timeline-step:nth-child(even) .timeline-arrow {
            left: -20px;
            right: auto;
            border-left: none;
            border-right: 20px solid white;
          }

          .timeline-circle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            font-size: 2rem;
            box-shadow: 0 0 0 8px white, 0 8px 30px rgba(16,185,129,0.4);
            border: 4px solid white;
          }

          .timeline-circle:hover {
            transform: translate(-50%, -50%) scale(1.15);
            box-shadow: 0 0 0 12px white, 0 12px 40px rgba(16,185,129,0.5);
          }

          .timeline-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 20px 60px rgba(16,185,129,0.25);
            border-color: #10b981;
          }
        }
      `}</style>
    </section>
  )
}