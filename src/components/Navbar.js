import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = ({ click }) => {
  return (
    <nav>
      <div className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-name">
            Origin-App<i class="fab fa-freebsd" />
          </Link>
        </div>
        <ul className="nav-right">
          <li><Link to="/notes" className="nav-memo">メモページへ</Link></li>
          <li><Link to="/notepost" className="nav-memo-detail">メモ詳細へ</Link></li>
        </ul>
        <div className="hamburger-menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;