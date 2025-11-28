'use client'

interface CTAProps {
  onRegisterClick: () => void
}

export default function CTA({ onRegisterClick }: CTAProps) {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Pronto Para Fidelizar Seus Clientes?
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
        Junte-se a centenas de empresas que já usam o Kiwi Cash
      </p>
      <button
        onClick={onRegisterClick}
        style={{
          background: 'white',
          color: '#10b981',
          padding: '1.2rem 3rem',
          borderRadius: '30px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}
      >
        Cadastro Grátis
      </button>
    </section>
  )
}
