import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
     <div className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-name">
            Origin-App<i class="fab fa-freebsd" />
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/notes" className="nav-memo">メモページへ</Link>
          <Link to="/notepost" className="nav-memo-detail">メモ詳細へ</Link>
        </div>
     </div>
     
    </>
  )
}


export default  Navbar;