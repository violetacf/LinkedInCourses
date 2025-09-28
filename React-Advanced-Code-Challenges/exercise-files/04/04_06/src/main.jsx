import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardProvider from './context'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </StrictMode>,
)
