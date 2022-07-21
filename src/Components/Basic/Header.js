import React from 'react'
import '../Style/MainStyle.css';
import Logo from '../Images/logo_taqat.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
    <nav>
   
      <ul class="nav-cont">
      <li className="nav-item"><a href="/">تسجيل دخول / مستخدم جديد</a></li>
        <li className="nav-item"><a href="/">عن طاقات</a></li>
        <li className="nav-item"><a href="/contact">تواصل معنا</a></li>
        <li className="nav-item"><a href="/services">خدماتنا</a></li>
        <li className="nav-item"><a href="/projects">برامجنا</a></li>
        <li>
        <div className="logo-image">
            <img src={Logo} class="img-fluid"/>
            </div>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Header