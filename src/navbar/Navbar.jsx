import { NavLink } from "react-router-dom";
import './nav.css'

export default function Navbar() {
  return (
    <nav className="p-4  text-white">
      <div className="container flex justify-between nav-bar">
      <ul>
        <li className="fw-bold fs-3"><NavLink to={'/'}>Start Framework</NavLink></li>
      </ul>
      <ul className="flex justify-between ul-bar">
        <li><NavLink to={'/about'}>ABOUT</NavLink></li>
        <li><NavLink to={'/portfolio'}>PORTFOLIO</NavLink></li>
        <li><NavLink to={'/contact'}>CONTACT</NavLink></li>
      </ul>
      </div>
    </nav>
  )
}
