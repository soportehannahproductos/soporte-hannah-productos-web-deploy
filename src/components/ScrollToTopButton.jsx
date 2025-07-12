import React, { useState, useEffect } from 'react'
import { Fab } from '@mui/material'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 100)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <Fab
      onClick={scrollToTop}
      aria-label="scroll to top"
      sx={{
        position: 'fixed',
        bottom: 80,
        right: 20,
        zIndex: 1400,
        bgcolor: 'rgba(128,128,128,0.6)', // gris semitransparente
        color: '#fff',                   // texto o icono blanco
        '&:hover': {
          bgcolor: 'rgba(128,128,128,0.8)', // un poco menos transparente al hover
        },
      }}
    >
      ↑
    </Fab>
  )
}
