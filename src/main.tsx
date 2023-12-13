import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom';
import InfosProvider from './contexts/InfosContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InfosProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </InfosProvider>
  </React.StrictMode>,
)
