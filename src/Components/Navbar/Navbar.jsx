import React from "react";
import { Link , useLocation } from "react-router-dom";
import NavbarCss from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoCyan from "../pictures/LogoCyan.png";


export default function Navbar() {
  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);
  const {pathname} = useLocation();

  return (
    <div>
      <div className={NavbarCss.navbar}>
        <Link to="/">
        <img src={LogoCyan} alt="logo" className={NavbarCss.myLogo} />
        </Link>
        <div className={NavbarCss.index}>
          <div className={NavbarCss.indx}>
            <Link to="/"  className={(pathname === '/') ? 'aqua' : ''} >Home</Link>
          </div>
          <div className={NavbarCss.indx}>
            <Link to="/aboutMe"  className={(pathname === '/aboutMe') ? 'aqua' : ''}>About Me</Link>
          </div>
          <div className={NavbarCss.indx}>
            <Link to="/experience"  className={(pathname === '/experience') ? 'aqua' : ''}>Experience</Link>
          </div>
          <div className={NavbarCss.indx}>
            <Link to="/work"  className={(pathname === '/work') ? 'aqua' : ''}>Work</Link>
          </div>
          <div className={NavbarCss.indx}>
            <Link to="/contact"  className={(pathname === '/contact') ? 'aqua' : ''}>Contact</Link>
          </div>
        </div>

        {/* Mobile */}

        <div className={NavbarCss.menu} onClick={handleClick}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <div className={nav ? NavbarCss.indexMob : NavbarCss.indexMobHidden}>
          <div className={NavbarCss.indxMob}>
            <Link to="/" onClick={handleClick}>Home</Link>
          </div>
          <div className={NavbarCss.indxMob}>
            <Link to="/aboutMe"  onClick={handleClick}>About Me</Link>
          </div>
          <div className={NavbarCss.indxMob}>
            <Link to="/experience"  onClick={handleClick}>Experience</Link>
          </div>
          <div className={NavbarCss.indxMob}>
            <Link to="/work" onClick={handleClick}>Work</Link>
          </div>
          <div className={NavbarCss.indxMob}>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
