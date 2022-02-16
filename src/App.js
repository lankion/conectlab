import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Colecao from './pages/Colecao';
import EditarPerfil from './pages/EditarPerfil';
import Home from './pages/Home';
import Licoes from './pages/Licoes';
import Login from './pages/Login';
import Simulador from './pages/Simulador';
import NavigationBarConnected from './components/navigation/NavigationBarConnected';
import NavigationBarDisconnected from './components/navigation/NavigationBarDisconnected';
import RecuperarSenha from './pages/RecuperarSenha';
import ProtectedPages from './pages/ProtectedPages';
import RedefinirFeedback from './pages/RedefinirFeedback';

function App() {
  return (
    <BrowserRouter>
      
      
      <Routes>
          <Route element={<NavigationBarDisconnected/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="simulador" element={<Simulador/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="recuperar" element={<RecuperarSenha/>}/>
            <Route path="feedback" element={<RedefinirFeedback/>}/>
          </Route>

          <Route element={<ProtectedPages/>}>
            <Route element={<NavigationBarConnected/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="simulador" element={<Simulador/>}/>
              <Route path="editar-perfil" element={<EditarPerfil/>}/>
              <Route path="colecao" element={<Colecao/>}/>
              <Route path="licoes" element={<Licoes/>}/> 
            </Route>        
          </Route>
          
          <Route path='*' element={<Home/>}/>
          
      </Routes>
    </BrowserRouter>   
  );
}
export default App;
