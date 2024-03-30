import {Link} from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
const Navbar = () => {
  const {user} = useAuthContext();
  const {logout} = useLogout();
  const [nav,setNav]=useState(false);
  const handleClick = ()=>{
    logout();
  }

  useEffect(()=>{
    const handleResize=()=>{
      setNav(false);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })


  return ( 
    <> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container mb-2 mt-2">
          <a className="navbar-brand" href="/home">DonateON</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to = "/" className="nav-link ">Home</Link>
              </li>
              <li className="nav-item">
                <Link to = "/donate" className="nav-link ">Donate</Link>
              </li>
            <li className="nav-item">
              <Link to = "/" className="nav-link">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link to = "/" className="nav-link">User Profile</Link>
            </li>
            <li className="nav-item">
              <Link to = "/" className="nav-link ">NGO Page</Link>
            </li>
            <li className="nav-item">
              <Link to = "/" className="nav-link ">Contact</Link>
            </li>
            {!user && 
              <>
                <li className="nav-item">
                  <Link to = "/login" className="nav-link ">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to = "/register" className="nav-link">Register</Link>
                </li>
              </>
            }
            {user &&
              <li className="nav-item">
                <a className="nav-link"  onClick={handleClick}>Logout</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  
      </>
  );
}
 
export default Navbar;