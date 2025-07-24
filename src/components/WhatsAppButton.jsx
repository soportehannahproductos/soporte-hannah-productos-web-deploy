import React from 'react'
import { Fab } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function WhatsAppButton() {
  const mensaje = 'Hola Hannah Products 👋✨, estoy interesado.'
  const mensajeCodificado = encodeURIComponent(mensaje)

  return (
    <Fab
      color="success"
      aria-label="whatsapp"
      href={`https://api.whatsapp.com/send?phone=541127758316&text=${mensajeCodificado}`}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1500 }}
    >
      <WhatsAppIcon />
    </Fab>
  )
}
