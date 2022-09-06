import "./Navbar.css"
import {NavLink} from "react-router-dom"

import React, { useContext } from 'react'
import { UserContext } from "../../context/user"


function Navbar() {
  const { user, setUser } = useContext(UserContext);

  function handleLogout(){
    setUser(null)
    localStorage.removeItem("jwt")
  }
  return (
    <div className="navbar">
      <div className="logo">Swahili Spot</div>
      <NavLink to="/">Home</NavLink>
      { user? <NavLink to="/cart">Cart</NavLink> : null}
      
      {!user ? <NavLink to="/login">Login</NavLink> : null}

      {!user ? <NavLink to="/signin">SigIn</NavLink> : null}

      <NavLink to="/dashboard">{user && user.role === "admin" ? "Dashboard" : null}</NavLink>
      <span className="user">{user ? user.username : ""}</span>
      {user ? <button className="logout" onClick={handleLogout}>Logout</button> : null}
    </div>
  );
}

export default Navbar