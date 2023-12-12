import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';


const App: React.FC = () => {
  return (
    <div className='pagina-toda'>
      <div className='menu'>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="contato">Contato</Link></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/sobre" Component={Sobre}/> 
        <Route path="/contato" Component={Contato}/>
      </Routes>
    </div>
  )
}

export default App
