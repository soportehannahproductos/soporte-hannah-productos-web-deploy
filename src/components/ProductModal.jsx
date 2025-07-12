import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CloseIcon from '@mui/icons-material/Close'
import InfoIcon from '@mui/icons-material/Info'
import DescriptionIcon from '@mui/icons-material/Description'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CategoryIcon from '@mui/icons-material/Category'
import StarIcon from '@mui/icons-material/Star'
import { useNavigate } from 'react-router-dom'

export default function ProductModal({ open, onClose, product, onAdd, isConfirmationModal = false, fromCart = false, }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()

  if (!product) return null

  if (isConfirmationModal) {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen={fullScreen}
        PaperProps={{
          style: {
            backgroundColor: '#1e1e1e',
            color: '#fff',
            borderRadius: fullScreen ? 0 : 16,
            padding: fullScreen ? '16px' : '20px',
            textAlign: 'center',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: { xs: '1.3rem', sm: '1.6rem' },
            fontWeight: 'bold',
            color: '#00e676',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <StarIcon fontSize="large" />
          ¡Producto agregado al carrito!
          <StarIcon fontSize="large" />
        </DialogTitle>

        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <img
              src={product.image}
              alt="Confirmación"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                boxShadow: '0 0 15px rgba(0, 255, 0, 0.4)',
              }}
            />
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              {product.description || 'Podés seguir navegando o ir al carrito.'}
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            mt: 1,
            px: 2,
          }}
        >
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              backgroundColor: '#00e676',
              color: '#000',
              width: '100%',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#00c853' },
            }}
          >
            Seguir comprando
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              onClose()
              navigate('/cart')
            }}
            sx={{
              borderColor: '#00e676',
              color: '#00e676',
              width: '100%',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#003d1f',
                borderColor: '#00ff90',
              },
            }}
          >
            Ir al carrito
          </Button>
        </DialogActions>
      </Dialog>
    )
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
          borderRadius: fullScreen ? 0 : 16,
          padding: fullScreen ? '16px 12px' : '24px',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          gap: 1,
          color: '#00e676',
        }}
      >
        <InfoIcon />
        {product.title}
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://http2.mlstatic.com/D_NQ_NP_2X_957198-MLA49876337542_052022-F.webp'
              }}
              sx={{
                width: '100%',
                maxHeight: { xs: 200, sm: 240 },
                objectFit: 'contain',
                borderRadius: 2,
                boxShadow: '0 0 12px rgba(0,255,0,0.3)',
              }}
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <Box display="flex" alignItems="center" mb={1}>
              <DescriptionIcon sx={{ color: '#00e676', mr: 1 }} />
              <Typography variant="subtitle1" fontWeight="bold">
                Descripción:
              </Typography>
            </Box>
            <Typography variant="body2" mb={2} sx={{ color: '#ccc', whiteSpace: 'pre-line' }}>
              {product.description || 'Sin descripción disponible.'}
            </Typography>

            <Box display="flex" alignItems="center" mb={1}>
              <AttachMoneyIcon sx={{ color: '#00e676', mr: 1 }} />
              <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#00e676' }}>
                Precio:
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: '#00e676' }}>
              ${product.price.toLocaleString('es-AR')}
            </Typography>

            {product.category && (
              <Box display="flex" alignItems="center" mb={1}>
                <CategoryIcon sx={{ color: '#00e676', mr: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Categoría:
                </Typography>
                <Typography variant="body2" ml={1} sx={{ color: '#ccc' }}>
                  {product.category}
                </Typography>
              </Box>
            )}
            {product.rating && (
              <Box display="flex" alignItems="center" mb={1}>
                <StarIcon sx={{ color: '#00e676', mr: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Valoración:
                </Typography>
                <Typography variant="body2" ml={1} sx={{ color: '#ccc' }}>
                  {product.rating} / 5
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </DialogContent>

      <Divider sx={{ bgcolor: '#333' }} />

      <DialogActions
        sx={{
          justifyContent: 'center',
          flexDirection: fullScreen ? 'column' : 'row',
          gap: 2,
          padding: fullScreen ? 1.5 : 2,
        }}
      >
       {!fromCart && (
          <Button
            onClick={() => {
              onAdd(product)
              onClose()
            }}
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            sx={{
              borderColor: '#00e676',
              color: '#00e676',
              width: fullScreen ? '100%' : 'auto',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#003d1f',
                borderColor: '#00ff90',
              },
            }}
          >
            Agregar al carrito
          </Button>
        )}

        <Button
          onClick={onClose}
          startIcon={<CloseIcon />}
          sx={{
            color: '#f0f0f0',
            width: fullScreen ? '100%' : 'auto',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
