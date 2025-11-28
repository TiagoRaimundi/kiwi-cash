export default function Segments() {
  const segments = [
    { icon: '🍕', title: 'Restaurantes', desc: 'Pizzarias, lanchonetes, delivery' },
    { icon: '💇', title: 'Salões & Barbearias', desc: 'Serviços de beleza e estética' },
    { icon: '🏋️', title: 'Academias', desc: 'Studios, crossfit, pilates' },
    { icon: '🛒', title: 'Varejo', desc: 'Lojas de roupa, calçados, acessórios' },
    { icon: '🔧', title: 'Serviços', desc: 'Oficinas, assistências técnicas' },
    { icon: '📱', title: 'Telecoms', desc: 'Operadoras e provedores de internet' },
    { icon: '☕', title: 'Cafeterias', desc: 'Cafés, padarias, confeitarias' },
    { icon: '🏨', title: 'Hospedagem', desc: 'Hotéis, pousadas, hostels' },
    { icon: '🎓', title: 'Educação', desc: 'Cursos, escolas, treinamentos' },
    { icon: '🏥', title: 'Saúde', desc: 'Clínicas, consultórios, farmácias' },
    { icon: '🚗', title: 'Automotivo', desc: 'Postos, lavagens, estacionamentos' },
    { icon: '🎮', title: 'Entretenimento', desc: 'Cinemas, parques, eventos' }
  ]

  return (
    <section id="segmentos" style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          marginBottom: '1rem',
          color: '#059669',
          fontWeight: 800
        }}>
          Para Qualquer Tipo de Negócio
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#6b7280',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          O Kiwi funciona para todos os segmentos
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {segments.map((seg, i) => (
            <div
              key={i}
              style={{
                background: '#f9fafb',
                padding: '2rem',
                borderRadius: '15px',
                border: '2px solid #e5e7eb',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#10b981'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(16,185,129,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{seg.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1f2937', fontWeight: 700 }}>
                {seg.title}
              </h3>
              <p style={{ color: '#6b7280' }}>{seg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}