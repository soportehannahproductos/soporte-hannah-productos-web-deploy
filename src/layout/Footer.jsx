import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(90deg, #b3d4fc 0%, #e8b3fc 100%)',
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 6 },
        textAlign: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: '0 -4px 12px rgba(179, 212, 252, 0.6)',
        mt: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        fontSize: { xs: '0.85rem', sm: '1rem' },
        fontWeight: 500,
        color: '#222',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Typography variant="body2" component="p" sx={{ userSelect: 'none' }}>
        &copy; 2025 Hannah Productos. Todos los derechos reservados.
      </Typography>
      <Link
        href="https://wa.me/5491127758316"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
          color: '#00e676',
          fontWeight: '700',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#00c853',
            textDecoration: 'underline',
          },
        }}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon fontSize="small" />
        Contáctanos por WhatsApp
      </Link>
    </Box>
  )
}
