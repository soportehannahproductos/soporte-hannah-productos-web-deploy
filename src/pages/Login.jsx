import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Divider,
} from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment'
import InventoryIcon from '@mui/icons-material/Inventory'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LoopIcon from '@mui/icons-material/Loop'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LockIcon from '@mui/icons-material/Lock'
import { useNavigate } from 'react-router-dom'

export default function Login({ setAuthorized }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [openModal, setOpenModal] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (password === 'Angel2025') {
      setAuthorized(true)
      localStorage.setItem('authorized', 'true')
      navigate('/')
    } else {
      setError('Clave incorrecta')
    }
  }

  const whatsappMessage = encodeURIComponent(
    'Hola, ya realicé la transferencia del adelanto para continuar con el desarrollo. Adjunto comprobante.'
  )
  const whatsappLink = `https://wa.me/5491132752125?text=${whatsappMessage}`

  return (
    <>
      {/* Modal bloqueante estilo hacker pro */}
      <Dialog
        open={openModal}
        disableEscapeKeyDown
        disableBackdropClick
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            bgcolor: '#121212',
            color: '#00ff90',
            border: '1px solid #00ff90',
            borderRadius: 2,
            boxShadow: '0 0 10px #00ff90',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#00ff90',
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <LockIcon sx={{ fontSize: 28 }} />
          ACCESO RESTRINGIDO
        </DialogTitle>

        <DialogContent sx={{ px: { xs: 2, sm: 4 }, py: 3 }}>
          <Typography variant="body1" mb={2} fontFamily="monospace">
            El presupuesto fue enviado. Para continuar utilizando la plataforma, es necesario realizar un abono.
          </Typography>

          <Divider sx={{ my: 2, bgcolor: '#00ff90' }} />

          <Stack spacing={1} fontFamily="monospace">
            <Typography><PaymentIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Adelanto: $10.000</Typography>
            <Typography><InventoryIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Plan básico: $15.000</Typography>
            <Typography><RocketLaunchIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Plan avanzado: $80.000</Typography>
          </Stack>

          <Divider sx={{ my: 3, bgcolor: '#00ff90' }} />

          <Typography variant="body1" align="center" fontFamily="monospace">
            <LoopIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Transferir al alias: <strong>freud.foucault.jung</strong>
          </Typography>

          <Typography mt={3} fontFamily="monospace">
            Una vez recibido el pago, se realizarán los ajustes necesarios y la página estará habilitada el día <strong>Lunes</strong> para que continúes con tus ventas.
          </Typography>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<WhatsAppIcon />}
            sx={{
              mt: 4,
              borderColor: '#00ff90',
              color: '#00ff90',
              '&:hover': {
                bgcolor: '#00ff90',
                color: '#121212',
              },
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar comprobante por WhatsApp
          </Button>
        </DialogContent>
      </Dialog>

      {/* Pantalla de login */}
      <Box
        sx={{
          maxWidth: 400,
          margin: '100px auto',
          padding: 4,
          bgcolor: '#1e1e1e',
          borderRadius: 2,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          fontFamily="monospace"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <LockIcon sx={{ fontSize: 24 }} />
          Hannah productos
        </Typography>
        <TextField
          type="password"
          placeholder="Clave secreta"
          variant="filled"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError('')
          }}
          InputProps={{
            sx: { bgcolor: '#2a2a2a', color: 'white' },
          }}
        />
        {error && (
          <Typography color="error" mt={1}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleSubmit}
        >
          Entrar
        </Button>
      </Box>
    </>
  )
}
