
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home' ;
import NavBar from './NavBar';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Testimonial from './Testimonial';
import Donate from './Donate';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signup/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
 <Route path='/home' element={<Home />}></Route>
 <Route path='/nav' element={<NavBar />}></Route>
 <Route path='/test' element={<Testimonial />}></Route>
 <Route path='/donate' element={<Donate/>}></Route>
 <Route path='/footer' element={<Footer/>}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
