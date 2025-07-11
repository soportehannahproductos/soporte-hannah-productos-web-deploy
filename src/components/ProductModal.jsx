import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export default function ProductModal({ open, onClose, product, onAdd }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  if (!product) return null

  const handleWhatsApp = () => {
    const msg = `Hola! Me interesa este producto: ${product.title} - $${product.price}`
    const url = `https://wa.me/541127758316?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: '#1e1e1e',
          color: '#f0f0f0',
          borderRadius: 12,
          padding: fullScreen ? '16px 8px' : '24px',
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {product.title}
      </DialogTitle>

      <DialogContent dividers>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              maxWidth: fullScreen ? '100%' : 300,
              height: 'auto',
              borderRadius: 10,
              boxShadow: '0 0 10px rgba(255,255,255,0.1)',
              objectFit: 'contain',
            }}
          />
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            {product.description}
          </Typography>
          <Typography
            variant="h6"
            component="strong"
            sx={{ color: '#00c853', mt: 1 }}
          >
            ${product.price.toLocaleString('es-AR')}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: 'center',
          gap: 2,
          paddingBottom: 2,
          flexWrap: 'wrap',
          rowGap: 1,
        }}
      >
        <Button
          onClick={handleWhatsApp}
          variant="contained"
          sx={{
            backgroundColor: '#25d366',
            color: '#fff',
            cursor: 'pointer',
            minWidth: 180,
            '&:hover': { backgroundColor: '#1ebe5d' },
          }}
        >
          Comprar por WhatsApp
        </Button>

        <Button
          onClick={() => {
            onAdd(product)
            onClose()
          }}
          variant="outlined"
          sx={{
            borderColor: '#00c853',
            color: '#00c853',
            cursor: 'pointer',
            minWidth: 160,
            '&:hover': {
              backgroundColor: '#003d1f',
              borderColor: '#00e676',
            },
          }}
        >
          Agregar al carrito
        </Button>

        <Button
          onClick={onClose}
          sx={{ color: '#f0f0f0', cursor: 'pointer', minWidth: 100 }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
