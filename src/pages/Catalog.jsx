import React, { useState } from 'react'
import {
  Grid,
  Box,
  Typography,
  IconButton,
} from '@mui/material'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import BuildIcon from '@mui/icons-material/Build'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import PowerIcon from '@mui/icons-material/Power'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import { styled } from '@mui/material/styles'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

// CATEGORÍAS
const categories = [
  { label: 'Todas', icon: <AllInclusiveIcon /> },
  { label: 'Indumentaria', icon: <CheckroomIcon /> },
  { label: 'Herramientas', icon: <BuildIcon /> },
  { label: 'Artefactos', icon: <HeadphonesIcon /> },
  { label: 'Lámparas', icon: <LightbulbIcon /> },
  { label: 'Cargadores', icon: <PowerIcon /> },
]

// ICON BUTTON PERSONALIZADO
const StyledIconButton = styled(IconButton)(({ theme, active }) => ({
  backgroundColor: active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
  borderRadius: '50%',
  padding: 10,
  color: active ? '#e87afc' : '#fff',
  boxShadow: active ? '0 0 12px #e87afc' : 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#b3d4fc',
    boxShadow: '0 0 10px #b3d4fc',
  },
}))

export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
    setShowConfirmModal(true)
  }

  const handleCloseConfirm = () => {
    setShowConfirmModal(false)
  }

  const filteredProducts =
    selectedCategory === 'Todas'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #b3d4fc, #e8b3fc)',
        py: 6,
        px: 2,
      }}
    >
      {/* CATEGORÍAS */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          mb: 6,
          flexWrap: 'wrap',
        }}
      >
        {categories.map(({ label, icon }) => (
          <Box
            key={label}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              minWidth: 70,
            }}
            onClick={() => setSelectedCategory(label)}
          >
            <StyledIconButton
  size="large"
  active={selectedCategory === label ? 1 : 0}
>
  {React.cloneElement(icon, {
    style: {
      color: selectedCategory === label ? '#e87afc' : '#000',
      transition: 'color 0.3s ease',
    },
  })}
</StyledIconButton>
          <Typography
            variant="caption"
            noWrap
            sx={{
              color: selectedCategory === label ? '#e87afc' : '#000', // 👈 negro por defecto
              textShadow: selectedCategory === label
                ? '0 0 6px #e87afc'
                : '0 0 3px rgba(0,0,0,0.1)', // más suave
              letterSpacing: '2px',
              mt: 0.5,
              fontWeight: selectedCategory === label ? 600 : 400,
              transition: 'all 0.3s ease',
         
            }}
          >
            {label}
          </Typography>

          </Box>
        ))}
      </Box>

      {/* PRODUCTOS */}
      <Grid container spacing={3} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <Box display="flex" justifyContent="center">
              <ProductCard product={product} onClick={setSelectedProduct} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* MODAL PRODUCTO */}
      <ProductModal
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAdd={(product) => {
          handleAddToCart(product)
          setSelectedProduct(null)
        }}
      />

      {/* MODAL CONFIRMACIÓN */}
      <ProductModal
        open={showConfirmModal}
        onClose={handleCloseConfirm}
        product={{
          title: '¡Se agregó correctamente!',
          description: '',
          image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
          price: 0,
        }}
        onAdd={() => {}}
        isConfirmationModal={true}
      />
    </Box>
  )
}
