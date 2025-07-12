import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem,
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { cart } = useCart()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  
  const categorias = ['Indumentaria', 'Herramientas', 'Artefactos']

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" sx={{ bgcolor: '#1e1e1e' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/')}>
          Hannah Productos
        </Typography>

        {/* Íconos */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Menú hamburguesa solo en xs */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Carrito con badge */}
          <IconButton
            color="inherit"
            aria-label="carrito"
            onClick={() => navigate('/cart')}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>

        {/* Menú desplegable para categorías solo en xs */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {categorias.map((cat) => (
            <MenuItem key={cat} onClick={handleMenuClose}>
              {cat}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
