import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom' // 👈 Agregado

export default function Login({ setAuthorized }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate() // 👈 Hook para redireccionar

  const handleSubmit = () => {
    if (password === 'Angel2025') {
      setAuthorized(true)
      navigate('/') // 👈 Redirigir al home
    } else {
      setError('Clave incorrecta')
    }
  }

  return (
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
      <Typography variant="h5" mb={3}>
        🔒 Ingresá al catálogo
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
      <Button variant="contained" color="success" fullWidth sx={{ mt: 3 }} onClick={handleSubmit}>
        Entrar
      </Button>
    </Box>
  )
}
