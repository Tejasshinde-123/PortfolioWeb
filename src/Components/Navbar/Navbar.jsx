import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const[menu, setMenu]=useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img className='mainlogo' src={logo} alt="Logo" />
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navmenu ${isMenuOpen ? 'open' : ''}`}>
        <li><AnchorLink className='anchor-link'href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<hr/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<hr/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className='contactme'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
