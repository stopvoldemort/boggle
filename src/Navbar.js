import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar-container">
    <NavLink className="navbar-link" activeClassName="navbar-active" exact to="/"> Home </NavLink>
    <NavLink className="navbar-link" activeClassName="navbar-active" to="/newgame"> New Game </NavLink>
    <NavLink className="navbar-link" activeClassName="navbar-active" to="/rules"> Rules </NavLink>
  </div>
)

export default Navbar
