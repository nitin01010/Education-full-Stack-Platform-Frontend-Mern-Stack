import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Snowfall from 'react-snowfall'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Snowfall /> */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
