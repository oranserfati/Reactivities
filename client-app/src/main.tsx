import 'semantic-ui-css/semantic.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/layouts/App.tsx'
import './app/layouts/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
