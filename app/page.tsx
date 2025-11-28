'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Segments from './components/Segments'
import HowWorks from './components/HowWorks'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import RegisterModal from './components/RegisterModal'

export default function Home() {
  const [showCadastroModal, setShowCadastroModal] = useState(false)

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header onRegisterClick={() => setShowCadastroModal(true)} />
      <Hero onRegisterClick={() => setShowCadastroModal(true)} />
      <Segments />
      <HowWorks />
      <Benefits />
      <Pricing onRegisterClick={() => setShowCadastroModal(true)} />
      <CTA onRegisterClick={() => setShowCadastroModal(true)} />
      <Footer />
      <RegisterModal isOpen={showCadastroModal} onClose={() => setShowCadastroModal(false)} />
    </div>
  )
}
