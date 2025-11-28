'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const chartData = [
  { mes: 'Jan', pontos: 12500, clientes: 45 },
  { mes: 'Fev', pontos: 18200, clientes: 67 },
  { mes: 'Mar', pontos: 22100, clientes: 89 },
  { mes: 'Abr', pontos: 28400, clientes: 112 },
  { mes: 'Mai', pontos: 34800, clientes: 145 },
  { mes: 'Jun', pontos: 42350, clientes: 178 },
]

const clientesData = [
  { id: 1, nome: 'Maria Silva', contato: '(11) 98888-1234', pontos: 450, totalGasto: 'R$ 2.250,00', ultimaCompra: '27/11/2024', cadastro: '05/01/2024' },
  { id: 2, nome: 'João Santos', contato: '(11) 97777-5678', pontos: 320, totalGasto: 'R$ 1.600,00', ultimaCompra: '26/11/2024', cadastro: '12/02/2024' },
  { id: 3, nome: 'Ana Costa', contato: '(11) 96666-9012', pontos: 180, totalGasto: 'R$ 900,00', ultimaCompra: '25/11/2024', cadastro: '20/03/2024' },
  { id: 4, nome: 'Pedro Oliveira', contato: '(11) 95555-3456', pontos: 520, totalGasto: 'R$ 2.600,00', ultimaCompra: '24/11/2024', cadastro: '08/04/2024' },
  { id: 5, nome: 'Carla Ferreira', contato: '(11) 94444-7890', pontos: 95, totalGasto: 'R$ 475,00', ultimaCompra: '23/11/2024', cadastro: '15/05/2024' },
]

const comprasData = [
  { id: 1, cliente: 'Maria Silva', contato: '(11) 98888-1234', valor: 150.00, pontosGerados: 30, data: '27/11/2024 14:23', tipo: 'Compra' },
  { id: 2, cliente: 'João Santos', contato: '(11) 97777-5678', valor: 85.50, pontosGerados: 17, data: '26/11/2024 10:15', tipo: 'Compra' },
  { id: 3, cliente: 'Ana Costa', contato: '(11) 96666-9012', valor: 0, pontosGerados: -50, data: '25/11/2024 16:45', tipo: 'Resgate' },
  { id: 4, cliente: 'Pedro Oliveira', contato: '(11) 95555-3456', valor: 220.00, pontosGerados: 44, data: '24/11/2024 09:30', tipo: 'Compra' },
  { id: 5, cliente: 'Carla Ferreira', contato: '(11) 94444-7890', valor: 95.00, pontosGerados: 19, data: '23/11/2024 11:20', tipo: 'Compra' },
]

export default function DashboardLoja() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [showCompraModal, setShowCompraModal] = useState(false)
  const [showResgateModal, setShowResgateModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState('')
  const [formData, setFormData] = useState({
    contato: '',
    valor: '',
    tipo: 'compra'
  })

  const pontosConfig = {
    conversao: 5, // R$ 5 = 1 ponto
    premios: [
      { pontos: 50, descricao: 'R$ 25 de desconto' },
      { pontos: 100, descricao: 'R$ 50 de desconto' },
      { pontos: 200, descricao: 'R$ 100 de desconto' }
    ]
  }

  const handleSubmitCompra = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess('Compra registrada! Pontos creditados com sucesso.')
    setShowCompraModal(false)
    setTimeout(() => setShowSuccess(''), 3000)
    setFormData({ contato: '', valor: '', tipo: 'compra' })
  }

  const handleResgate = () => {
    setShowSuccess('Resgate realizado com sucesso!')
    setShowResgateModal(false)
    setTimeout(() => setShowSuccess(''), 3000)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>🥝 Kiwi Cash</div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.3rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>
            Pizzaria Bella Napoli
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span>Admin</span>
          <span style={{ opacity: 0.8 }}>|</span>
          <Link href="/" style={{ color: 'white' }}>Sair</Link>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{
          position: 'fixed',
          left: 0,
          top: '72px',
          width: '260px',
          height: 'calc(100vh - 72px)',
          background: 'white',
          boxShadow: '2px 0 10px rgba(0,0,0,0.05)',
          padding: '2rem 0',
          overflowY: 'auto'
        }}>
          {[
            { id: 'dashboard', icon: '📊', label: 'Dashboard' },
            { id: 'clientes', icon: '👥', label: 'Clientes' },
            { id: 'compras', icon: '🛒', label: 'Compras' },
            { id: 'premios', icon: '🎁', label: 'Prêmios' },
            { id: 'config', icon: '⚙️', label: 'Configurações' },
            { id: 'relatorios', icon: '📈', label: 'Relatórios' }
          ].map(item => (
            <div
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                background: activeSection === item.id ? '#FFF5E6' : 'transparent',
                borderLeft: activeSection === item.id ? '4px solid #10b981' : '4px solid transparent',
                color: activeSection === item.id ? '#10b981' : '#333'
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
              <span style={{ fontWeight: activeSection === item.id ? 600 : 400 }}>{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main style={{ marginLeft: '260px', padding: '2rem', width: 'calc(100% - 260px)' }}>
          {showSuccess && (
            <div style={{
              background: '#d1fae5',
              color: '#065f46',
              padding: '1rem 1.5rem',
              borderRadius: '10px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 10px rgba(16,185,129,0.2)'
            }}>
              <span style={{ fontSize: '1.2rem' }}>✓</span>
              <span>{showSuccess}</span>
            </div>
          )}

          {/* Dashboard Section */}
          {activeSection === 'dashboard' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: '#1f2937', fontSize: '2rem' }}>Dashboard</h1>
                <button
                  onClick={() => setShowCompraModal(true)}
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    padding: '0.8rem 1.8rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(139,69,19,0.3)'
                  }}
                >
                  + Nova Compra
                </button>
              </div>
              
              {/* Stats Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                {[
                  { label: 'Pontos Distribuídos', value: '42.350', change: '+23% este mês', color: '#10b981', icon: '⭐' },
                  { label: 'Clientes Ativos', value: '178', change: '+33 novos', color: '#10b981', icon: '👥' },
                  { label: 'Compras Este Mês', value: '456', change: '+18% vs anterior', color: '#f59e0b', icon: '🛒' },
                  { label: 'Taxa de Retorno', value: '76%', change: '+12% de fidelização', color: '#8b5cf6', icon: '🔄' }
                ].map((stat, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1.8rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                    border: '1px solid #f3f4f6'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        {stat.label}
                      </div>
                      <div style={{ fontSize: '1.8rem' }}>{stat.icon}</div>
                    </div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: stat.color, marginBottom: '0.5rem' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#10b981' }}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
                }}>
                  <h3 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Pontos Distribuídos (6 meses)</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                      <XAxis dataKey="mes" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip />
                      <Line type="monotone" dataKey="pontos" stroke="#10b981" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
                }}>
                  <h3 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Novos Clientes (6 meses)</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                      <XAxis dataKey="mes" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip />
                      <Bar dataKey="clientes" fill="#10b981" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
              }}>
                <h3 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Ações Rápidas</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setShowCompraModal(true)}
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    + Registrar Compra
                  </button>
                  <button
                    onClick={() => setShowResgateModal(true)}
                    style={{
                      background: 'white',
                      color: '#10b981',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '10px',
                      border: '2px solid #10b981',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    🎁 Fazer Resgate
                  </button>
                  <button
                    onClick={() => setActiveSection('clientes')}
                    style={{
                      background: 'white',
                      color: '#10b981',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '10px',
                      border: '2px solid #10b981',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    👥 Ver Clientes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Clientes Section */}
          {activeSection === 'clientes' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: '#1f2937', fontSize: '2rem' }}>Clientes</h1>
                <input
                  type="text"
                  placeholder="🔍 Buscar cliente..."
                  style={{
                    padding: '0.8rem 1.5rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    width: '300px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                overflowX: 'auto'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Cliente</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Contato</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Pontos</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Total Gasto</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Última Compra</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientesData.map(cliente => (
                      <tr key={cliente.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>{cliente.nome}</div>
                          <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Desde {cliente.cadastro}</div>
                        </td>
                        <td style={{ padding: '1rem', color: '#6b7280' }}>{cliente.contato}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{
                            background: '#FFF5E6',
                            color: '#10b981',
                            padding: '0.4rem 1rem',
                            borderRadius: '20px',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                          }}>
                            ⭐ {cliente.pontos} pts
                          </span>
                        </td>
                        <td style={{ padding: '1rem', fontWeight: 600, color: '#10b981' }}>{cliente.totalGasto}</td>
                        <td style={{ padding: '1rem', color: '#6b7280' }}>{cliente.ultimaCompra}</td>
                        <td style={{ padding: '1rem' }}>
                          <button style={{
                            background: '#f3f4f6',
                            color: '#374151',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}>
                            Ver Detalhes
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Compras Section */}
          {activeSection === 'compras' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: '#1f2937', fontSize: '2rem' }}>Histórico de Compras</h1>
                <button
                  onClick={() => setShowCompraModal(true)}
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    padding: '0.8rem 1.8rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  + Nova Compra
                </button>
              </div>

              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                overflowX: 'auto'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Cliente</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Contato</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Valor</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Pontos</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Data/Hora</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comprasData.map(compra => (
                      <tr key={compra.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '1rem', fontWeight: 600 }}>{compra.cliente}</td>
                        <td style={{ padding: '1rem', color: '#6b7280' }}>{compra.contato}</td>
                        <td style={{ padding: '1rem', fontWeight: 600 }}>
                          {compra.valor > 0 ? `R$ ${compra.valor.toFixed(2)}` : '-'}
                        </td>
                        <td style={{
                          padding: '1rem',
                          color: compra.pontosGerados > 0 ? '#10b981' : '#ef4444',
                          fontWeight: 600
                        }}>
                          {compra.pontosGerados > 0 ? '+' : ''}{compra.pontosGerados} pts
                        </td>
                        <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>{compra.data}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            background: compra.tipo === 'Compra' ? '#d1fae5' : '#fed7aa',
                            color: compra.tipo === 'Compra' ? '#065f46' : '#92400e'
                          }}>
                            {compra.tipo}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Prêmios Section */}
          {activeSection === 'premios' && (
            <div>
              <h1 style={{ marginBottom: '2rem', color: '#1f2937', fontSize: '2rem' }}>Prêmios Disponíveis</h1>
              
              <div style={{
                background: '#FFF5E6',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '2rem',
                border: '2px solid #059669'
              }}>
                <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>📊 Configuração Atual</h3>
                <p style={{ color: '#6b7280' }}>
                  <strong>Conversão:</strong> A cada R$ {pontosConfig.conversao} gastos = 1 ponto
                </p>
              </div>

              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {pontosConfig.premios.map((premio, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        width: '70px',
                        height: '70px',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem'
                      }}>
                        🎁
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                          {premio.pontos} Pontos
                        </h3>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>{premio.descricao}</p>
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
                      Editar
                    </button>
                  </div>
                ))}
              </div>

              <button style={{
                marginTop: '2rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                + Adicionar Novo Prêmio
              </button>
            </div>
          )}

          {/* Configurações Section */}
          {activeSection === 'config' && (
            <div>
              <h1 style={{ marginBottom: '2rem', color: '#1f2937', fontSize: '2rem' }}>Configurações</h1>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
                }}>
                  <h3 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Regras de Pontos</h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: 500,
                      color: '#374151'
                    }}>
                      Conversão de Pontos
                    </label>
                    <select style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}>
                      <option value="1">R$ 1 = 1 ponto</option>
                      <option value="5" selected>R$ 5 = 1 ponto</option>
                      <option value="10">R$ 10 = 1 ponto</option>
                      <option value="custom">Personalizado</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}>
                      <input type="checkbox" defaultChecked />
                      <span>Pontos em dobro no aniversário do cliente</span>
                    </label>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}>
                      <input type="checkbox" />
                      <span>Expiração de pontos após 12 meses</span>
                    </label>
                  </div>

                  <button style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}>
                    Salvar Configurações
                  </button>
                </div>

                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
                }}>
                  <h3 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Dados da Empresa</h3>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 500,
                        color: '#374151'
                      }}>
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        defaultValue="Pizzaria Bella Napoli"
                        style={{
                          width: '100%',
                          padding: '0.8rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 500,
                        color: '#374151'
                      }}>
                        Segmento
                      </label>
                      <select style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}>
                        <option value="restaurante" selected>Restaurante/Pizzaria</option>
                        <option value="beleza">Salão/Barbearia</option>
                        <option value="varejo">Varejo</option>
                      </select>
                    </div>
                  </div>

                  <button style={{
                    marginTop: '1.5rem',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}>
                    Atualizar Dados
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Relatórios Section */}
          {activeSection === 'relatorios' && (
            <div>
              <h1 style={{ marginBottom: '2rem', color: '#1f2937', fontSize: '2rem' }}>Relatórios</h1>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { titulo: 'Relatório Mensal', descricao: 'Pontos distribuídos e resgates do mês', icone: '📊' },
                  { titulo: 'Top Clientes', descricao: 'Clientes com mais pontos acumulados', icone: '🏆' },
                  { titulo: 'Análise de Retenção', descricao: 'Taxa de retorno e frequência de compras', icone: '📈' },
                  { titulo: 'Performance de Prêmios', descricao: 'Quais prêmios são mais resgatados', icone: '🎁' }
                ].map((relatorio, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div style={{ fontSize: '3rem' }}>{relatorio.icone}</div>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                          {relatorio.titulo}
                        </h3>
                        <p style={{ color: '#6b7280' }}>{relatorio.descricao}</p>
                      </div>
                    </div>
                    <button style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}>
                      Gerar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal Nova Compra */}
      {showCompraModal && (
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
              <h2 style={{ color: '#10b981' }}>Registrar Nova Compra</h2>
              <span
                onClick={() => setShowCompraModal(false)}
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

            <form onSubmit={handleSubmitCompra}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  color: '#374151'
                }}>
                  CPF ou Telefone do Cliente *
                </label>
                <input
                  type="text"
                  value={formData.contato}
                  onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
                  placeholder="000.000.000-00 ou (00) 00000-0000"
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  color: '#374151'
                }}>
                  Valor da Compra (R$) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.valor}
                  onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                  placeholder="0.00"
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{
                background: '#FFF5E6',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                border: '2px solid #059669'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6b7280' }}>Valor da compra:</span>
                  <strong style={{ color: '#10b981' }}>R$ {parseFloat(formData.valor || '0').toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6b7280' }}>Pontos a ganhar:</span>
                  <strong style={{ color: '#10b981', fontSize: '1.2rem' }}>
                    ⭐ {Math.floor(parseFloat(formData.valor || '0') / pontosConfig.conversao)} pontos
                  </strong>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
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
                Registrar e Creditar Pontos
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Resgate */}
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
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h2 style={{ color: '#10b981' }}>Fazer Resgate</h2>
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

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#374151'
              }}>
                CPF ou Telefone do Cliente
              </label>
              <input
                type="text"
                placeholder="000.000.000-00"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{
              background: '#FFF5E6',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>Cliente: Maria Silva</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>
                ⭐ 450 pontos disponíveis
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#374151'
              }}>
                Selecione o Prêmio
              </label>
              <select style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem'
              }}>
                <option value="">Escolha um prêmio...</option>
                <option value="50">50 pontos - R$ 25 de desconto</option>
                <option value="100">100 pontos - R$ 50 de desconto</option>
                <option value="200">200 pontos - R$ 100 de desconto</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setShowResgateModal(false)}
                style={{
                  flex: 1,
                  background: '#f3f4f6',
                  color: '#374151',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600
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
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600
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
