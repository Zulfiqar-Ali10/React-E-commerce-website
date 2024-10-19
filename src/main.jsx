import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Context/CartContext.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <CartProvider>
    <ToastContainer />
    <BrowserRouter>
      <Auth0Provider
        domain="dev-wuule7hu423tjitj.us.auth0.com"
        clientId="QrviSSye14IaSk4cwQXUCAXzGL8ixxL1"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </CartProvider>
  //  </StrictMode>,
)
