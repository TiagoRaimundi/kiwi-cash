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
    <section id="como-funciona" style={{ padding: '4rem 2rem', background: '#f8fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#10b981'
        }}>
          Como Funciona? É Simples!
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem'
        }}>
          {steps.map((item, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '0 5px 15px rgba(16,185,129,0.3)'
              }}>
                {item.step}
              </div>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center', color: '#1f2937' }}>
                {item.title}
              </h3>
              <p style={{ color: '#6b7280', textAlign: 'center' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
