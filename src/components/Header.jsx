//import { Link } from 'react-router-dom'; // Import the Link component
import '../css/style.css'; // Import your CSS styles

function Header() {
  return (
    <div>
      <header className="header">
        <a href='/' className="logo">Portfolio</a>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href='/' className="active">Home</a>
          <a href='/about'>About</a>
          <a href="/services">Services</a>
          <a href='/portfolio'>Portfolio</a>
          <a href='/contact'>Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
