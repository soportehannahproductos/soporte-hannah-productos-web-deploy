import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Box, Container } from '@mui/material'

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#121212', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container sx={{ flexGrow: 1, py: 4 }}>{children}</Container>
      <Footer />
      <WhatsAppButton />
    </Box>
  )
}
