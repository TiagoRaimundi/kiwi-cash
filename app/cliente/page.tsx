'use client'

import Link from 'next/link'
import { useState } from 'react'

const historicoData = [
  { id: 1, loja: 'Pizzaria Bella Napoli', tipo: 'Compra', valor: 150.00, pontos: 30, data: '27/11/2024 14:23', status: 'Creditado' },
  { id: 2, loja: 'Pizzaria Bella Napoli', tipo: 'Compra', valor: 85.50, pontos: 17, data: '26/11/2024 10:15', status: 'Creditado' },
  { id: 3, loja: 'Pizzaria Bella Napoli', tipo: 'Resgate', valor: 0, pontos: -50, data: '25/11/2024 16:45', status: 'Resgatado' },
  { id: 4, loja: 'Cafeteria Coffee House', tipo: 'Compra', valor: 22.00, pontos: 22, data: '24/11/2024 09:30', status: 'Creditado' },
  { id: 5, loja: 'Pizzaria Bella Napoli', tipo: 'Compra', valor: 95.00, pontos: 19, data: '23/11/2024 11:20', status: 'Creditado' },
  { id: 6, loja: 'Salão Style Cut', tipo: 'Compra', valor: 80.00, pontos: 1, data: '20/11/2024 15:00', status: 'Creditado' },
]

const lojasParticipantes = [
  { id: 1, nome: 'Pizzaria Bella Napoli', categoria: '🍕 Restaurante', pontos: 320, visitas: 12 },
  { id: 2, nome: 'Cafeteria Coffee House', categoria: '☕ Cafeteria', pontos: 85, visitas: 28 },
  { id: 3, nome: 'Salão Style Cut', categoria: '💇 Beleza', pontos: 45, visitas: 5 },
]

export default function ClientePage() {
  const [activeTab, setActiveTab] = useState('pontos')
  const [showResgateModal, setShowResgateModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [lojaSelected, setLojaSelected] = useState('')

  const pontosTotal = 450
  const pontosProximoResgate = 50
  const proximoVencimento = '27/05/2025'

  const handleResgate = () => {
    setShowResgateModal(false)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        padding: '1.5rem 2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            🥝 Kiwi Cash
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Maria Silva</span>
            <span style={{ opacity: 0.8 }}>|</span>
            <Link href="/" style={{ color: 'white' }}>Sair</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {showSuccess && (
          <div style={{
            background: '#d1fae5',
            color: '#065f46',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 2px 10px rgba(16,185,129,0.2)'
          }}>
            <span style={{ fontSize: '1.2rem' }}>✓</span>
            <span>Resgate realizado com sucesso! O benefício será aplicado em breve.</span>
          </div>
        )}

        {/* Card Principal de Pontos */}
        <div style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '25px',
          marginBottom: '2rem',
          boxShadow: '0 15px 40px rgba(16,185,129,0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decoração de fundo */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            fontSize: '15rem',
            opacity: 0.1
          }}>
            🥝
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '1rem', opacity: 0.9, fontSize: '1.1rem' }}>Meus Pontos</div>
            <div style={{
              fontSize: '4.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span>⭐</span>
              <span>{pontosTotal}</span>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>Faltam para o próximo resgate</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {pontosProximoResgate - (pontosTotal % pontosProximoResgate)} pontos
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>Lojas participantes</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>3 lojas</div>
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>Validade dos pontos</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{proximoVencimento}</div>
              </div>
            </div>
            
            <button
              onClick={() => setShowResgateModal(true)}
              style={{
                background: 'white',
                color: '#10b981',
                padding: '1.2rem 3rem',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
              }}
            >
              🎁 Resgatar Pontos
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            borderBottom: '2px solid #f3f4f6',
            padding: '0 1rem',
            overflowX: 'auto'
          }}>
            {[
              { id: 'pontos', label: 'Como Ganhar Pontos', icon: '⭐' },
              { id: 'historico', label: 'Histórico', icon: '📜' },
              { id: 'lojas', label: 'Minhas Lojas', icon: '🏪' },
              { id: 'premios', label: 'Prêmios', icon: '🎁' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '1.5rem 2rem',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: activeTab === tab.id ? '#10b981' : '#6b7280',
                  borderBottom: activeTab === tab.id ? '3px solid #10b981' : '3px solid transparent',
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ marginRight: '0.5rem' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ padding: '2.5rem' }}>
            {/* Tab: Como Ganhar Pontos */}
            {activeTab === 'pontos' && (
              <div>
                <h2 style={{ marginBottom: '2rem', color: '#1f2937', fontSize: '1.8rem' }}>
                  Como Ganhar Mais Pontos?
                </h2>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    { icone: '🛒', titulo: 'Compre nas Lojas', desc: 'Cada compra gera pontos automaticamente' },
                    { icone: '🎂', titulo: 'Aniversário', desc: 'Pontos em dobro no seu mês de aniversário' },
                    { icone: '👥', titulo: 'Indique Amigos', desc: 'Ganhe bônus ao indicar novos clientes' },
                    { icone: '⚡', titulo: 'Campanhas Especiais', desc: 'Fique atento às promoções das lojas' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      background: '#f9fafb',
                      padding: '2rem',
                      borderRadius: '15px',
                      border: '2px solid #e5e7eb',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icone}</div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                        {item.titulo}
                      </h3>
                      <p style={{ color: '#6b7280' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: '#d1fae5',
                  padding: '2rem',
                  borderRadius: '15px',
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{ fontSize: '2rem' }}>💡</div>
                  <div>
                    <h3 style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Dica</h3>
                    <p style={{ color: '#6b7280' }}>
                      Você está a apenas <strong>{pontosProximoResgate - (pontosTotal % pontosProximoResgate)} pontos</strong> de poder resgatar um novo prêmio! Continue comprando nas lojas participantes.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Histórico */}
            {activeTab === 'historico' && (
              <div>
                <h2 style={{ marginBottom: '2rem', color: '#1f2937', fontSize: '1.8rem' }}>
                  Histórico de Atividades
                </h2>
                
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Loja</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Tipo</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Valor</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Pontos</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Data/Hora</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historicoData.map(item => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                          <td style={{ padding: '1rem', fontWeight: 500 }}>{item.loja}</td>
                          <td style={{ padding: '1rem', color: '#6b7280' }}>{item.tipo}</td>
                          <td style={{ padding: '1rem', fontWeight: 600 }}>
                            {item.valor > 0 ? `R$ ${item.valor.toFixed(2)}` : '-'}
                          </td>
                          <td style={{
                            padding: '1rem',
                            color: item.pontos > 0 ? '#10b981' : '#ef4444',
                            fontWeight: 600,
                            fontSize: '1.05rem'
                          }}>
                            {item.pontos > 0 ? '+' : ''}{item.pontos} pts
                          </td>
                          <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>{item.data}</td>
                          <td style={{ padding: '1rem' }}>
                            <span style={{
                              padding: '0.3rem 0.9rem',
                              borderRadius: '20px',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              background: item.status === 'Creditado' ? '#d1fae5' : '#fed7aa',
                              color: item.status === 'Creditado' ? '#065f46' : '#92400e'
                            }}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{
                  marginTop: '2rem',
                  textAlign: 'center',
                  color: '#6b7280'
                }}>
                  <p>Mostrando últimas 6 transações</p>
                </div>
              </div>
            )}

            {/* Tab: Minhas Lojas */}
            {activeTab === 'lojas' && (
              <div>
                <h2 style={{ marginBottom: '2rem', color: '#1f2937', fontSize: '1.8rem' }}>
                  Lojas Onde Acumulo Pontos
                </h2>
                
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {lojasParticipantes.map(loja => (
                    <div key={loja.id} style={{
                      background: '#f9fafb',
                      padding: '2rem',
                      borderRadius: '15px',
                      border: '2px solid #e5e7eb',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                          {loja.nome}
                        </h3>
                        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{loja.categoria}</p>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                          <div>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.2rem' }}>Pontos acumulados</div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 600, color: '#10b981' }}>
                              ⭐ {loja.pontos}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.2rem' }}>Total de visitas</div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 600, color: '#10b981' }}>
                              {loja.visitas}x
                            </div>
                          </div>
                        </div>
                      </div>
                      <button style={{
                        background: '#f3f4f6',
                        color: '#374151',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}>
                        Ver Prêmios
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '2rem',
                  background: '#d1fae5',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '2px solid #10b981',
                  textAlign: 'center'
                }}>
                  <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>🏪 Descubra Mais Lojas</h3>
                  <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                    Centenas de estabelecimentos participam do Kiwi Cash
                  </p>
                  <button style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}>
                    Explorar Lojas Próximas
                  </button>
                </div>
              </div>
            )}

            {/* Tab: Prêmios */}
            {activeTab === 'premios' && (
              <div>
                <h2 style={{ marginBottom: '2rem', color: '#1f2937', fontSize: '1.8rem' }}>
                  Prêmios Disponíveis
                </h2>
                
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {[
                    { pontos: 50, titulo: 'R$ 25 de Desconto', descricao: 'Use em qualquer compra', disponivel: true },
                    { pontos: 100, titulo: 'R$ 50 de Desconto', descricao: 'Use em compras acima de R$ 100', disponivel: true },
                    { pontos: 200, titulo: 'R$ 100 de Desconto', descricao: 'Use em compras acima de R$ 200', disponivel: true },
                    { pontos: 500, titulo: 'R$ 250 de Desconto', descricao: 'Use em qualquer compra', disponivel: false }
                  ].map((premio, index) => (
                    <div key={index} style={{
                      background: premio.disponivel ? 'white' : '#f9fafb',
                      padding: '2rem',
                      borderRadius: '15px',
                      border: premio.disponivel ? '2px solid #10b981' : '2px solid #e5e7eb',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      opacity: premio.disponivel ? 1 : 0.6
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{
                          background: premio.disponivel
                            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                            : '#e5e7eb',
                          color: 'white',
                          width: '80px',
                          height: '80px',
                          borderRadius: '15px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.8rem',
                          fontWeight: 'bold'
                        }}>
                          <div style={{ fontSize: '2rem' }}>🎁</div>
                          <div style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>{premio.pontos}</div>
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                            {premio.titulo}
                          </h3>
                          <p style={{ color: '#6b7280' }}>{premio.descricao}</p>
                          <p style={{
                            marginTop: '0.5rem',
                            color: premio.disponivel ? '#10b981' : '#ef4444',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                          }}>
                            {premio.disponivel ? `✓ Você pode resgatar (tem ${pontosTotal} pts)` : `✗ Faltam ${premio.pontos - pontosTotal} pontos`}
                          </p>
                        </div>
                      </div>
                      <button
                        disabled={!premio.disponivel}
                        onClick={() => {
                          setLojaSelected('Pizzaria Bella Napoli')
                          setShowResgateModal(true)
                        }}
                        style={{
                          background: premio.disponivel
                            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                            : '#e5e7eb',
                          color: premio.disponivel ? 'white' : '#9ca3af',
                          padding: '1rem 2rem',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: premio.disponivel ? 'pointer' : 'not-allowed',
                          fontWeight: 600,
                          fontSize: '1rem'
                        }}
                      >
                        Resgatar
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '2rem',
                  background: '#fef3c7',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '2px solid #f59e0b'
                }}>
                  <h3 style={{ color: '#92400e', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>⚠️</span> Importante
                  </h3>
                  <p style={{ color: '#78350f' }}>
                    Seus pontos têm validade de 12 meses. Use antes de <strong>{proximoVencimento}</strong> para não perder!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📈</div>
            <div style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Este Mês
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>
              +89 pts
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎁</div>
            <div style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Total Resgatado
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>
              250 pts
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💰</div>
            <div style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Economia Total
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>
              R$ 125
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏆</div>
            <div style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Nível
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              Prata
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Resgate */}
      {showResgateModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '20px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h2 style={{ color: '#10b981' }}>Confirmar Resgate</h2>
              <span
                onClick={() => setShowResgateModal(false)}
                style={{
                  fontSize: '2rem',
                  cursor: 'pointer',
                  color: '#6b7280',
                  lineHeight: 1
                }}
              >
                ×
              </span>
            </div>

            <div style={{
              background: '#d1fae5',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>Resgate em</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem' }}>
                {lojaSelected || 'Pizzaria Bella Napoli'}
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎁</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>
                50 pontos
              </div>
              <div style={{ color: '#6b7280', marginTop: '0.5rem' }}>
                R$ 25 de desconto
              </div>
            </div>

            <p style={{ color: '#6b7280', marginBottom: '1.5rem', textAlign: 'center' }}>
              O desconto será aplicado na sua próxima compra. Mostre este código no caixa:
            </p>

            <div style={{
              background: '#f3f4f6',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              textAlign: 'center',
              fontFamily: 'monospace',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              letterSpacing: '3px',
              color: '#10b981'
            }}>
              KIWI-{Math.random().toString(36).substr(2, 6).toUpperCase()}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setShowResgateModal(false)}
                style={{
                  flex: 1,
                  background: '#f3f4f6',
                  color: '#374151',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handleResgate}
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                Confirmar Resgate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
