import React, { useState } from 'react'
import nv from './navbar.module.css'
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
export default function Navbar() {
  const [menuM , setmenuM] = useState(false);

  return (
    
    <>
      <div className={nv.navbar}>
        <div className={nv.logo}></div>
        <div className={nv.menu}>
        <Link to="/" className={nv.a}>Home</Link>
       <Link to="/about" className={nv.a}>About</Link>
       <Link to="/contact" className={nv.a}>Contact us</Link>
       <Link to="/login" className={nv.a}>Login</Link>
        </div>
        <a   className={nv.menubutton}  onClick={()=>setmenuM(!menuM)}><TiThMenu /></a>
      </div>
      <div className={menuM?nv.menuMobile:nv.menuMobileHidden}>
        <Link to="/" className={nv.a2}>Home</Link>
       <Link to="/about" className={nv.a2}>About</Link>
       <Link to="/contact" className={nv.a2}>Contact us</Link>
       <Link to="/login" className={nv.a2}>Login</Link>
        </div>
        
    </>
  )
}
