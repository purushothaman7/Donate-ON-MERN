
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signup/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
