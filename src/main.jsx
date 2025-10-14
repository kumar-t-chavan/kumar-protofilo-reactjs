import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


// find the 'root' div in index.html and render App inside it
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>    
    <App />
     </BrowserRouter>
  </StrictMode>
)
