import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ show, click }) => {
  const sideBarClass = ["sidebar"];

  if (show) {
    sideBarClass.push("show");
  }



  return (
    <div className={sideBarClass.join(" ")}>
      <ul className="sidebar--links" onClick={click}>
        <li>
          <Link to="/notes">メモページへ</Link> 
          <Link to="/notepost">メモ詳細へ</Link> 
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;