// components/Categoria.jsx
import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledIconButton = styled(IconButton)(({ active }) => ({
  backgroundColor: active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)',
  borderRadius: '50%',
  padding: 10,
  color: active ? '#e87afc' : '#000',
  boxShadow: active ? '0 0 10px #e87afc' : 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#b3d4fc',
    boxShadow: '0 0 10px #b3d4fc',
  },
}))

export default function Categoria({ categories, selectedCategory, onSelectCategory }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 3,
        mb: 6,
      }}
    >
      {categories.map(({ label, icon }) => (
        <Box
          key={label}
          onClick={() => onSelectCategory(label)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            minWidth: 70,
          }}
        >
          <StyledIconButton active={selectedCategory === label ? 1 : 0}>
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
              mt: 0.5,
              fontWeight: selectedCategory === label ? 600 : 400,
              color: selectedCategory === label ? '#e87afc' : '#000',
              textShadow:
                selectedCategory === label
                  ? '0 0 6px #e87afc'
                  : '0 0 3px rgba(0,0,0,0.1)',
              letterSpacing: '1.5px',
            }}
          >
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
