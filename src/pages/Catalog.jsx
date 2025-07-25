
import React, { useState, useMemo, useEffect } from 'react'
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Button,
} from '@mui/material'
import {
  Checkroom as CheckroomIcon,
  Build as BuildIcon,
  Headphones as HeadphonesIcon,
  Lightbulb as LightbulbIcon,
  Power as PowerIcon,
  AllInclusive as AllInclusiveIcon,
} from '@mui/icons-material'

import Categoria from '../components/Categoria' 
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { useGetProductosQuery } from '../service/ecApi'
import { useCart } from '../context/CartContext'
import logo from '../assets/logo2.png'



export default function Catalog() {
  const { data: productos = [], error, isLoading } = useGetProductosQuery()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [visibleCount, setVisibleCount] = useState(8)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const { addToCart } = useCart()
  const isMobile = useMediaQuery('(max-width:600px)')
  const iconMap = {
  Muebles: <CheckroomIcon />,
  Artefactos: <HeadphonesIcon />,
  Electrodomésticos: <PowerIcon />,
  reloj: <LightbulbIcon />,
  Hogar: <BuildIcon />,
}

const categories = useMemo(() => {
  const unique = [...new Set(productos.map(p => p.category).filter(Boolean))]
  return [
    { label: 'Todas', icon: <AllInclusiveIcon /> },
    ...unique.map(label => ({
      label,
      icon: iconMap[label] || <AllInclusiveIcon />,
    })),
  ]
}, [productos])
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todas') return productos
    return productos.filter(p => p.category === selectedCategory)
  }, [productos, selectedCategory])

  const visibleProducts = filteredProducts.slice(0, visibleCount)

  const handleAddToCart = (product) => {
    addToCart(product)
    setShowConfirmModal(true)
  }
useEffect(() => {
  if (productos.length > 0) {
    const categoriasUnicas = [
      ...new Set(productos.map((p) => p.category).filter(Boolean)),
    ]
    console.log('Categorías encontradas:', categoriasUnicas)
  }
}, [productos])
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to right, #b3d4fc, #e8b3fc)',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ width: 120, height: 'auto', mb: 4 }}
        />
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, color: '#6c3cb4', letterSpacing: 1 }}
        >
          Cargando productos...
        </Typography>
        <Box
          sx={{
            width: 40,
            height: 40,
            border: '4px solid #ccc',
            borderTop: '4px solid #6c3cb4',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        <style>
          {`@keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`}
        </style>
      </Box>
    )
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to right, #f8d7da, #f5c6cb)',
          textAlign: 'center',
          p: 4,
          color: '#721c24',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Error al cargar productos:
        </Typography>
        <Typography>{error.toString()}</Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #b3d4fc, #e8b3fc)',
        py: 5,
        px: 2,
      }}
    >
      {/* Aviso compra mínima */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          background: 'linear-gradient(to right, #ffe0e0, #fff1f1)',
          borderLeft: '6px solid #d32f2f',
          borderRadius: 3,
          px: 3,
          py: 2,
          maxWidth: 500,
          margin: '0 auto 32px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
          alt="Alerta"
          style={{
            width: isMobile ? 24 : 32,
            height: isMobile ? 24 : 32,
            filter: 'drop-shadow(0 0 3px rgba(255, 0, 0, 0.3))',
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            color: '#b71c1c',
            letterSpacing: '0.8px',
          }}
        >
          El pedido mínimo para realizar una compra es de <strong>$100.000</strong>
        </Typography>
      </Box>

      {/* Categorías */}
      <Categoria
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(label) => {
          setSelectedCategory(label)
          setVisibleCount(8)
        }}
      />

      {/* Productos */}
      <Grid container spacing={3} justifyContent="center">
        {visibleProducts.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <Box display="flex" justifyContent="center">
              <ProductCard product={product} onClick={setSelectedProduct} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Botón Mostrar Más */}
      {visibleCount < filteredProducts.length && (
        <Box mt={4} textAlign="center">
          <Button
            variant="contained"
            onClick={() => setVisibleCount((prev) => prev + 8)}
            sx={{
              backgroundColor: '#e87afc',
              color: '#fff',
              px: 4,
              py: 1,
              borderRadius: 2,
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              '&:hover': {
                backgroundColor: '#d668ea',
              },
            }}
          >
            Mostrar más
          </Button>
        </Box>
      )}

      {/* Modales */}
      <ProductModal
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAdd={(product) => {
          handleAddToCart(product)
          setSelectedProduct(null)
        }}
      />

      <ProductModal
        open={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
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
