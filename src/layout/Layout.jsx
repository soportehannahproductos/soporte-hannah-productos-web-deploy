import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { Box, Container } from '@mui/material'

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #b3d4fc, #e8b3fc)', // fondo como el logo
        color: '#222', // texto oscuro para contraste
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* CABECERA */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <Container sx={{ flexGrow: 1, py: 4 }}>{children}</Container>

      {/* PIE DE PÁGINA */}
      <Footer />

      {/* BOTONES FLOTANTES */}
      <WhatsAppButton />
      <ScrollToTopButton />
    </Box>
  )
}
