import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  ListItemAvatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCart } from '../context/CartContext'
import ProductModal from '../components/ProductModal'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PaymentIcon from '@mui/icons-material/Payment'

export default function Cart() {
  const { cart, clearCart, addToCart, removeFromCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)

  const total = cart.reduce((sum, p) => sum + p.price, 0)

const whatsappNumber = '5491132752125';
const message = encodeURIComponent(
  `👋 ¡Hola! Me interesa comprar los siguientes productos:\n\n` +
    cart
      .map((p, i) => `📦 ${i + 1}. *${p.title}* - $${p.price.toFixed(2)}`)
      .join('\n') +
    `\n\n💰 *Total:* $${total.toFixed(2)}\n\n` +
    `💳 *Métodos de pago:*\n🏦 Transferencia Bancaria\n🟦 Mercado Pago\n\n` +
    `✅ ¿Están disponibles?`
);

const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;



  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProduct(null)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const handleRequestDelete = (product) => {
    setProductToDelete(product)
    setConfirmDeleteOpen(true)
  }

  const handleConfirmDelete = () => {
    removeFromCart(productToDelete)
    setConfirmDeleteOpen(false)
    setProductToDelete(null)
  }

  const handleCancelDelete = () => {
    setConfirmDeleteOpen(false)
    setProductToDelete(null)
  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 2,
        bgcolor: '#121212',
        borderRadius: 2,
        color: '#fff',
        minHeight: '80vh',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Carrito de Compras
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 4, mb: 1 }}>
  Métodos de pago disponibles:
</Typography>

<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 2,
    mt: 1,
  }}
>
  <Box
    sx={{
      flex: 1,
      bgcolor: '#1e1e1e',
      p: 2,
      borderRadius: 2,
      textAlign: 'center',
      border: '1px solid #333',
    }}
  >
    <AccountBalanceIcon sx={{ fontSize: 40, color: '#4caf50' }} />
    <Typography variant="subtitle2" mt={1}>
      Transferencia Bancaria
    </Typography>
  </Box>

  <Box
    sx={{
      flex: 1,
      bgcolor: '#1e1e1e',
      p: 2,
      borderRadius: 2,
      textAlign: 'center',
      border: '1px solid #333',
    }}
  >
    <PaymentIcon sx={{ fontSize: 40, color: '#2196f3' }} />
    <Typography variant="subtitle2" mt={1}>
      Mercado Pago
    </Typography>
  </Box>
</Box>


      {cart.length === 0 ? (
        <Typography>No hay productos en el carrito.</Typography>
      ) : (
        <>
          <List>
            {cart.map((product, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    bgcolor: '#1e1e1e',
                    borderRadius: 1,
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    px: 1,
                  }}
                >
                  <Box
                    onClick={() => handleOpenModal(product)}
                    sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer' }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        src={product.image}
                        alt={product.title}
                        sx={{ width: 64, height: 64, mr: 2 }}
                        onError={(e) =>
                          (e.currentTarget.src =
                            'https://http2.mlstatic.com/D_NQ_NP_2X_957198-MLA49876337542_052022-F.webp')
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
                          {product.title}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" sx={{ color: '#ccc' }}>
                          Precio: ${product.price.toFixed(2)}
                        </Typography>
                      }
                    />
                  </Box>

                  <IconButton
                    onClick={() => handleRequestDelete(product)}
                    sx={{
                      color: '#f44336',
                      '&:hover': { color: '#ff7961' },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <Divider sx={{ bgcolor: '#333' }} />
              </React.Fragment>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Costo total: ${total.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="success"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 3 }}
            onClick={clearCart}
          >
            Comprar por WhatsApp
          </Button>
        </>
      )}

      {/* Modal de producto */}
      <ProductModal
        open={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        onAdd={handleAddToCart}
        onRemove={removeFromCart}
        fromCart
      />

      {/* Modal de confirmación para eliminar */}
      <Dialog open={confirmDeleteOpen} onClose={handleCancelDelete}>
        <DialogTitle>¿Eliminar producto del carrito?</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Estás seguro que querés eliminar{' '}
            <strong>{productToDelete?.title || 'este producto'}</strong> del carrito?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="inherit">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
