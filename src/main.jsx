import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import IsDarkModeProvider from './providers/IsDarkModeProvider.jsx'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsDarkModeProvider>
      <App />
    </IsDarkModeProvider>
  </React.StrictMode>,
)
