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

const products = [
  {
    id: 1,
    title: 'Remera estampada',
    description: 'Remera cómoda y fresca para todos los días',
    price: 2500,
    image:
      'https://d22fxaf9t8d39k.cloudfront.net/c5430e85068cebab6fddd3824113d69230248e418fc62dd0315633cad70bd82f2877.jpeg',
    category: 'Indumentaria',
  },
  {
    id: 2,
    title: 'Taladro eléctrico',
    description: 'Potente taladro para bricolaje y trabajo profesional',
    price: 10000,
    image: 'https://www.abrafersrl.com.ar/wp-content/uploads/LD12S.jpg',
    category: 'Herramientas',
  },
  {
    id: 3,
    title: 'Auriculares inalámbricos',
    description: 'Sonido de alta calidad sin cables',
    price: 6000,
    image:
      'https://acdn-us.mitiendanube.com/stores/884/018/products/gamma-hogar-2022-10-25t104326-7711-f545577cf5cc3a201b16667059054363-1024-1024.jpg',
    category: 'Artefactos',
  },
  {
    id: 4,
    title: 'Lámpara de escritorio',
    description: 'Lámpara LED con diseño moderno y eficiente',
    price: 3500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkjDlk5YYJtP-uNhp9nhhcyGj2nzrtWg25g&s',
    category: 'Lámparas',
  },
  {
    id: 5,
    title: 'Cargador portátil',
    description: 'Carga rápida para tu móvil en cualquier lugar',
    price: 4000,
    image: 'https://www.hola.com/horizon/original_aspect_ratio/8d5ab6f8b5f5-axneb-a.jpg',
    category: 'Cargadores',
  },
]

const categories = [
  { label: 'Todas', icon: <AllInclusiveIcon /> },
  { label: 'Indumentaria', icon: <CheckroomIcon /> },
  { label: 'Herramientas', icon: <BuildIcon /> },
  { label: 'Artefactos', icon: <HeadphonesIcon /> },
  { label: 'Lámparas', icon: <LightbulbIcon /> },
  { label: 'Cargadores', icon: <PowerIcon /> },
]

// IconButton estilizado para íconos blancos y neón al activo/hover
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
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product])
    alert(`${product.title} agregado al carrito`)
  }

  const filteredProducts =
    selectedCategory === 'Todas'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <>
      {/* Categorías con íconos blancos y efecto neón */}
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
          <Grid item key={product.id}>
            <ProductCard product={product} onClick={setSelectedProduct} neonBorder />
          </Grid>
        ))}
      </Grid>

      <ProductModal
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAdd={handleAddToCart}
      />
    </>
  )
}
