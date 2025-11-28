'use client'

const benefits = [
  { icon: '📈', title: 'Aumente o Retorno', desc: 'Clientes voltam 3x mais com programa de pontos' },
  { icon: '💰', title: 'Ticket Médio +40%', desc: 'Clientes gastam mais para acumular pontos' },
  { icon: '🎯', title: 'Reduza Churn em 65%', desc: 'Pontos acumulados prendem o cliente' },
  { icon: '📊', title: 'Dados Valiosos', desc: 'Conheça o comportamento dos seus clientes' },
  { icon: '⚡', title: 'Setup em 5min', desc: 'Sem complicação, sem instalação, sem código' },
  { icon: '📱', title: 'Multiplataforma', desc: 'Funciona em qualquer dispositivo' }
]

export default function Benefits() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#10b981'
        }}>
          Por Que Usar Kiwi Cash?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {benefits.map((item, i) => (
            <div key={i} style={{
              background: '#f9fafb',
              padding: '2rem',
              borderRadius: '15px',
              border: '2px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                {item.title}
              </h3>
              <p style={{ color: '#6b7280' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
