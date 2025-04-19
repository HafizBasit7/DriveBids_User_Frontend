import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      toastOptions={{
        style: {
          fontFamily: 'Inter',
          // fontFamily: 'Inter, sans-serif',
          background: '#1977cf',
          color: 'white'
        }
      }}
      position="top-center"
      reverseOrder={false}/>
    <App />
  </StrictMode>,
)
