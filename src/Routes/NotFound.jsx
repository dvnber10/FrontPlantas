import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f1f1f1'
  
    }}>
      Page not found 
      <Link to="/"> Volver al inicio</Link>
    </div>
  )
}

export default NotFound
