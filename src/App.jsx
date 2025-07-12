import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'
import Login from './pages/Login'
import { CartProvider } from './context/CartContext'

function App() {
  const [authorized, setAuthorized] = useState(false)

  // Cargar autorización desde localStorage al iniciar
  useEffect(() => {
    const auth = localStorage.getItem('authorized')
    if (auth === 'true') setAuthorized(true)
  }, [])


  // Guardar el estado en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('authorized', authorized)
  }, [authorized])

  return (
    <CartProvider>
      <Router>
        
        <Routes>
          <Route path="/login" element={<Login setAuthorized={setAuthorized} />} />
          <Route
            path="/cart"
            element={
              authorized ? (
                <Layout>
                  <Cart />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/*"
            element={
              authorized ? (
                <Layout>
                  <Catalog />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
