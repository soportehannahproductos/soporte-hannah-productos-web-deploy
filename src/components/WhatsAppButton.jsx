import React from 'react'
import { Fab } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function WhatsAppButton() {
  return (
    <Fab
      color="success"
      aria-label="whatsapp"
      href="https://wa.me/541132752125"
      target="_blank"
      sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1500 }}
    >
      <WhatsAppIcon />
    </Fab>
  )
}
