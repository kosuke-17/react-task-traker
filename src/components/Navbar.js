import React, { UseState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
     <div className="nav">
       <div className="nav-container">
         <Link to="/" className="nav-link">
            Origin-React<i class="fab fa-angellist"></i>
          </Link>
       </div>
     </div>
     
    </>
  )
}


export default  Navbar;