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
    <section id="como-funciona" style={{ padding: '5rem 2rem', background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#d1fae5',
            color: '#059669',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1rem',
            letterSpacing: '0.5px'
          }}>
            PROCESSO SIMPLES
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            marginBottom: '1rem',
            color: '#059669',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            Como Funciona em 6 Passos
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Um fluxo intuitivo que torna a fidelização simples para você e seus clientes
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="desktop-timeline" style={{ display: 'none', position: 'relative' }}>
          {/* Linha conectora */}
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #10b981, #10b981, transparent)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            position: 'relative',
            zIndex: 1
          }}>
            {steps.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{
                  position: 'relative',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 8px 25px rgba(16,185,129,0.3)',
                    border: '4px solid white',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15) translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(16,185,129,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(16,185,129,0.3)'
                  }}>
                    {item.step}
                  </div>
                </div>
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', textAlign: 'center', color: '#1f2937', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6b7280', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline com Cards */}
        <div className="mobile-timeline" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {steps.map((item, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '1.75rem',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              position: 'relative',
              border: '1px solid #e5e7eb',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 16px 35px rgba(16,185,129,0.15)'
              e.currentTarget.style.borderColor = '#10b981'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
              e.currentTarget.style.borderColor = '#e5e7eb'
            }}>
              {/* Background gradient accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  boxShadow: '0 6px 20px rgba(16,185,129,0.3)',
                  flexShrink: 0
                }}>
                  {item.step}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1f2937', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1200px) {
          .desktop-timeline {
            display: block !important;
          }
          .mobile-timeline {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}