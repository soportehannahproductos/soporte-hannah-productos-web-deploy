import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Catalog from './pages/Catalog'
import Login from './pages/Login'

function App() {
  const [authorized, setAuthorized] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuthorized={setAuthorized} />} />
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
  )
}

export default App
