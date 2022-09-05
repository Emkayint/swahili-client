import "./Navbar.css"
import {NavLink} from "react-router-dom"

import React, { useContext } from 'react'
import { UserContext } from "../../context/user"


function Navbar() {
  const { user, setUser } = useContext(UserContext);

  function handleLogout(){
    fetch("/logout")
    .then(res => {
      if(res.ok){
        setUser(null);
      }
    })
    console.log(user)
  }
  return (
    <div className="navbar">
      <div className="logo">Swahili Spot</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      {!user ? <NavLink to="/login">Login</NavLink> : null}

      {!user ? <NavLink to="/signin">SigIn</NavLink> : null}

      <NavLink to="/dashboard">Dashboard</NavLink>
      <span className="user">{user ? user.username : ""}</span>
      {user ? <button className="logout" onClick={handleLogout}>Logout</button> : null}
    </div>
  );
}

export default Navbar