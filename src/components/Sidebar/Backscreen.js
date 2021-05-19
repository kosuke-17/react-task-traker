import './Backscreen.css'

const Backscreen = ({ show, click }) => {
  return show && <div className='backscreen' onClick={click}></div>;
};

export default Backscreen;