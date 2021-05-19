import React from 'react';
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
          <Link to="/notepost" className="nav-post">メモ詳細へ</Link>
          <Link to="/notes" className="nav-post">メモページへ</Link>
       </div>
     </div>
     
    </>
  )
}


export default  Navbar;