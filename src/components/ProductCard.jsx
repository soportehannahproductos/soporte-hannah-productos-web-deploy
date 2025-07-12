import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export default function ProductCard({ product, onClick }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: isMobile ? '100%' : 180,          // ✅ 180px en web
        height: isMobile ? 140 : 360,               // ✅ 360px en web
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column', // ↔ row en mobile, ↕ column en web
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        backgroundColor: '#1e1e1e',
        color: '#f0f0f0',
        margin: '0 auto',
      }}
    >
      <CardActionArea
        onClick={() => onClick(product)}
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          height: '100%',
          width: '100%',
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          onError={(e) => {
            e.target.src =
              'https://http2.mlstatic.com/D_NQ_NP_2X_957198-MLA49876337542_052022-F.webp'
          }}
          sx={{
            width: isMobile ? 140 : '100%',
            height: isMobile ? '100%' : 180,
            objectFit: 'cover',
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            width: '100%',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            noWrap={!isMobile}
            gutterBottom
            sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }}
          >
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
              minHeight: isMobile ? 0 : 40,
              mb: 1,
            }}
          >
            {product.description}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: '#00c853', fontWeight: 'bold' }}
          >
            ${product.price.toLocaleString('es-AR')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
