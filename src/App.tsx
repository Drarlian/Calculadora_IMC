import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';


const App: React.FC = () => {
  return (
    <div className='pagina-toda'>
      <div className='menu'>
        <div/>
        <div className='container-lista'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="contato">Contato</Link></li>
          </ul>
        </div>
        <div className='container-tema'>
          <button>Tema</button>
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
