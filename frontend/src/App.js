import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Donate from "./pages/DonatePage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./components/Footer"
function App() {
  const {user} = useAuthContext()
  return(
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/donate" element={!user?<Login/>:<Donate/>}></Route>
            <Route path="/login" element={!user?<Login/>:<Home/>}></Route>
            <Route path="/register" element={!user?<Signup/>:<Home/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;