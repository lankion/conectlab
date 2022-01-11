import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Colecao from './pages/Colecao';
import Dashboard from './pages/Dashboard';
import EditarPerfil from './pages/EditarPerfil';
import Escolha from './pages/Escolha';
import Home from './pages/Home';
import Licoes from './pages/Licoes';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Simulador from './pages/Simulador';
import BarraNavegacao from './components/navegacao/BarraNavegacao';
import RecuperarSenha from './pages/RecuperarSenha';



function App() {
  return (
    <BrowserRouter>
      <BarraNavegacao/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="simulador" element={<Simulador/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="cadastro" element={<Cadastro/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="escolha" element={<Escolha/>}/>
          <Route path="recuperar" element={<RecuperarSenha/>}/>
          <Route path="perfil" element={<Perfil/>}>
              <Route path="editar-perfil" element={<EditarPerfil/>}/>
              <Route path="colecao" element={<Colecao/>}/>
              <Route path="licoes" element={<Licoes/>}/> 
          </Route>
          <Route path='*' element={<Home/>}/>
          
      </Routes>
    </BrowserRouter>   
  );
}
export default App;
