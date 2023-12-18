import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import { useContext } from 'react';
import { InfosContext } from './contexts/InfosContext';
import { TiWeatherSunny } from "react-icons/ti";
import { ToastContainer } from 'react-toastify';


const App: React.FC = () => {
  const {tema, alteraTema} = useContext(InfosContext)

  return (
    <div className='pagina-toda'>
      <ToastContainer />
      <div style={tema === 'light'? {'backgroundColor': '#3F48CC', 'borderBottomColor': 'black'}: {'backgroundColor': '#000000', 'borderBottomColor': 'white'}} className='menu'>
        <div/>
        <div className='container-lista'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="contato">Contato</Link></li>
          </ul>
        </div>
        <div className='container-tema'>
          <button onClick={alteraTema}><TiWeatherSunny /></button>
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
