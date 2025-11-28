'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Produto',
      links: ['Preços', 'Documentação', 'Status', 'Segurança']
    },
    {
      title: 'Empresa',
      links: ['Sobre', 'Blog', 'Carreiras', 'Contato']
    },
    {
      title: 'Legal',
      links: ['Privacidade', 'Termos de Serviço', 'Cookies', 'LGPD']
    }
  ]

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' }
  ]

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      color: 'white',
      padding: '4rem 2rem 2rem',
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Main footer content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '1.75rem' }}>🥝</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px' }}>
                KIWI CASH
              </span>
            </div>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: '#d1d5db',
              marginBottom: '1.5rem'
            }}>
              Transformando empresas em negócios mais rentáveis com fidelização inteligente.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  title={social.label}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#10b981'
                    e.currentTarget.style.borderColor = '#10b981'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {section.links.map((link, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href="#"
                      style={{
                        color: '#d1d5db',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#10b981'
                        e.currentTarget.style.transform = 'translateX(4px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#d1d5db'
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingTop: '2rem'
        }}>
          <div style={{ fontSize: '0.95rem', color: '#9ca3af' }}>
            © {currentYear} Kiwi Cash. Todos os direitos reservados.
          </div>

          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="#"
              style={{
                fontSize: '0.9rem',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              style={{
                fontSize: '0.9rem',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
            >
              Termos de Uso
            </a>
          </div>
        </div>

        {/* Status badge */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          alignItems: 'center',
          fontSize: '0.85rem',
          color: '#9ca3af'
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            background: '#10b981',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
          Todos os sistemas operacionais
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </footer>
  )
}
