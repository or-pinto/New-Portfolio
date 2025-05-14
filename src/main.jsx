import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.css' // Use all default CSS styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/new-portfolio/'>
    <App />
  </BrowserRouter>
)