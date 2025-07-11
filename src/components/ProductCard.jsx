// src/components/ProductCard.jsx
import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box
} from '@mui/material'

export default function ProductCard({ product, onClick }) {
  return (
    <Card
      sx={{
        width: 250,
        height: 360,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        backgroundColor: '#1e1e1e',
        color: '#f0f0f0',
      }}
    >
      <CardActionArea
        onClick={() => onClick(product)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          onError={(e) => { e.target.src = '/placeholder.png' }}
          sx={{
            height: 180,
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <CardContent sx={{ flexGrow: 1, width: '100%' }}>
          <Typography variant="h6" noWrap gutterBottom>
            {product.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#cccccc',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              minHeight: 40
            }}
          >
            {product.description}
          </Typography>

          <Box mt={1}>
            <Typography
              variant="subtitle1"
              sx={{ color: '#00c853', fontWeight: 'bold' }}
            >
              ${product.price.toLocaleString('es-AR')}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
