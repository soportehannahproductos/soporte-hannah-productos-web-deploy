import React from 'react'
import { Box, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#1e1e1e', py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="gray">
        &copy; 2025 Hannah Productos. Todos los derechos reservados.
      </Typography>
      <Link href="https://wa.me/541127758316" target="_blank" sx={{ color: '#25d366', mt: 1, display: 'inline-block' }}>
        Contactanos por WhatsApp
      </Link>
    </Box>
  )
}
