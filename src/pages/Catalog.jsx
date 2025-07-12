import React, { useState } from 'react'
import { Grid, Box, Typography, IconButton } from '@mui/material'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import BuildIcon from '@mui/icons-material/Build'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import PowerIcon from '@mui/icons-material/Power'
import { styled } from '@mui/material/styles'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const categories = [
  { label: 'Todas', icon: <AllInclusiveIcon /> },
  { label: 'Indumentaria', icon: <CheckroomIcon /> },
  { label: 'Herramientas', icon: <BuildIcon /> },
  { label: 'Artefactos', icon: <HeadphonesIcon /> },
  { label: 'Lámparas', icon: <LightbulbIcon /> },
  { label: 'Cargadores', icon: <PowerIcon /> },
]

const WhiteIconButton = styled(IconButton)(({ active }) => ({
  color: '#fff',
  transition: 'color 0.3s ease, text-shadow 0.3s ease',
  ...(active && {
    color: '#00ff00',
    textShadow: '0 0 8px #00ff00',
  }),
  '&:hover': {
    color: '#00ff00',
    textShadow: '0 0 12px #00ff00',
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
    <>
      {/* Categorías con íconos */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          mb: 4,
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
            <WhiteIconButton size="large" active={selectedCategory === label ? 1 : 0}>
              {icon || <Box sx={{ width: 40, height: 40 }} />}
            </WhiteIconButton>
            <Typography
              variant="caption"
              noWrap
              sx={{
                color: selectedCategory === label ? '#00ff00' : '#ccc',
                textShadow: selectedCategory === label ? '0 0 5px #00ff00' : 'none',
                transition: 'color 0.3s ease',
                mt: 0.5,
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid item xs={6} sm={6} md={3} lg={3} key={product.id}>
            <ProductCard product={product} onClick={setSelectedProduct} neonBorder />
          </Grid>
        ))}
      </Grid>

      {/* Modal principal de producto */}
      <ProductModal
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAdd={(product) => {
          handleAddToCart(product)
          setSelectedProduct(null)
        }}
      />

      {/* Modal de confirmación */}
      <ProductModal
        open={showConfirmModal}
        onClose={handleCloseConfirm}
        product={{
          title: '¡Se agregó correctamente!',
          description: '',
          image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', // ícono check verde o similar
          price: 0,
        }}
        onAdd={() => {}}
        isConfirmationModal={true}
      />
    </>
  )
}
