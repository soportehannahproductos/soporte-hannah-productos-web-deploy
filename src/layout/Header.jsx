import React, { useState } from 'react'
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

export default function Header() {
  const cartCount = 0 // aquí luego puede venir del estado
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
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Hannah Productos
        </Typography>

        {/* Categorías para pantallas md+ */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 3,
            alignItems: 'center',
          }}
        >
          {categorias.map((cat) => (
            <Typography
              key={cat}
              component="span"
              sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
            >
              {cat}
            </Typography>
          ))}
        </Box>

        {/* Íconos para xs (hamburguesa + carrito) y md (solo carrito) */}
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

          {/* Carrito siempre visible */}
          <IconButton color="inherit" aria-label="carrito">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>

        {/* Menú desplegable para categorías en xs */}
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
