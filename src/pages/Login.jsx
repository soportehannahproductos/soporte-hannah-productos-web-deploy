import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo2.png'

export default function Login({ setAuthorized }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (password === 'Angel2025') {
      setAuthorized(true)
      localStorage.setItem('authorized', 'true')
      navigate('/')
    } else {
      setError('❌ Clave incorrecta')
    }
  }

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 12,
        p: 4,
        borderRadius: 3,
        background: 'linear-gradient(145deg, #1e1e1e, #2c2c2c)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            width: 70,
            height: 70,
            bgcolor: 'white',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 8px rgba(0,0,0,0.4)',
          }}
        >
<<<<<<< HEAD
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
            <Typography><InventoryIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Plan básico: $45.000</Typography>
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
=======
          <Box
            component="img"
            src={logo}
            alt="Hannah Logo"
>>>>>>> bb276f8 (Cambio de diseño)
            sx={{
              width: 40,
              height: 40,
              objectFit: 'contain',
            }}
          />
        </Box>
        <Box sx={{ ml: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Great Vibes", cursive',
              color: 'white',
              textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
            }}
          >
            Hannah
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'white',
              letterSpacing: '6px',
              fontWeight: 300,
            }}
          >
            PRODUCTS
          </Typography>
        </Box>
      </Box>

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
          sx: {
            bgcolor: '#333',
            color: 'white',
            borderRadius: 1,
          },
        }}
        InputLabelProps={{ style: { color: '#ccc' } }}
        sx={{ mb: 2 }}
      />

      {error && (
        <Typography color="error" sx={{ mb: 2, fontSize: '0.9rem' }}>
          {error}
        </Typography>
      )}

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{
          backgroundColor: '#4caf50',
          '&:hover': { backgroundColor: '#45a049' },
          transition: '0.3s',
          fontWeight: 'bold',
          letterSpacing: 1,
        }}
      >
        Entrar
      </Button>
    </Paper>
  )
}
