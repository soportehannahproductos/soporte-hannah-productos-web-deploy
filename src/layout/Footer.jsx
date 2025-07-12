import React from 'react'
import { Box, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right, #b3d4fc, #e8b3fc)',
        py: 3,
        textAlign: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: '0 -2px 8px rgba(179, 212, 252, 0.5)',
        mt: 'auto',
      }}
    >
      <Typography variant="body2" sx={{ color: '#222' }}>
        &copy; 2025 Hannah Productos. Todos los derechos reservados.
      </Typography>
      <Link
        href="https://wa.me/541127758316"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#00e676',
          mt: 1,
          display: 'inline-block',
          fontWeight: 'bold',
          '&:hover': { color: '#00c853', textDecoration: 'underline' },
        }}
      >
        Contactanos por WhatsApp
      </Link>
    </Box>
  )
}
