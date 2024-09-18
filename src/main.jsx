import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ways from './config/config.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ways />
  </StrictMode>,
)
