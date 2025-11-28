'use client'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '20px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#10b981' }}>Cadastro da Empresa</h2>
        <input
          type="text"
          placeholder="Nome da Empresa"
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '1rem',
            border: '2px solid #e5e7eb',
            borderRadius: '10px',
            fontSize: '1rem'
          }}
        />
        <input
          type="email"
          placeholder="E-mail"
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '1rem',
            border: '2px solid #e5e7eb',
            borderRadius: '10px',
            fontSize: '1rem'
          }}
        />
        <input
          type="tel"
          placeholder="Telefone"
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '2rem',
            border: '2px solid #e5e7eb',
            borderRadius: '10px',
            fontSize: '1rem'
          }}
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '0.8rem',
              border: '2px solid #e5e7eb',
              borderRadius: '10px',
              background: 'white',
              color: '#1f2937',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Cancelar
          </button>
          <button
            style={{
              flex: 1,
              padding: '0.8rem',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  )
}
