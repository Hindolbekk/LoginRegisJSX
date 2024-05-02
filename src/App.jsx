import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/Login/Login';
import Registiration from './components/Registiration/Registiration';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route index element={<Login/>}/>
    <Route path="/regis" element={<Registiration/>}/>
   </Routes>
    </div>
  );
}

export default App;
