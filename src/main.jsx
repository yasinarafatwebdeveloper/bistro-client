import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <div className='max-w-6xl mx-auto'>
    <RouterProvider router={router} />
    </div>
   </HelmetProvider>
  
  </StrictMode>,
)
