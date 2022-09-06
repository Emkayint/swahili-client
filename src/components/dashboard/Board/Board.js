import { useEffect } from "react";
import { useState } from "react";
import Nav from "../Nav";
import User from "../user/user";
import "./Board.css"
// import Cards from "../cards/cards";

function Board(){

  const [users, setUsers] = useState([])
  const token = localStorage.getItem("jwt")

  useEffect(() => {
    fetch("users", {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(r => {
      if(r.ok){
        r.json().then(setUsers)
      }
    })
  }, [token, setUsers])


  const tableUsers = users.map(user => (<User key = {user.id} username = {user.username} phone = {user.phone} id = {user.id} role = {user.role}/> ))
  return (
    <div className="dash">
      <Nav />
      <div className="board">
        <div className="header">
          <input type="text" placeholder="Search" />
          <span>
            <i>Monday,</i> 11 Jully 2022
          </span>
        </div>
        <div className="users">
          <table className="w3-table-all  w3-hoverable">
            <thead>
              <tr className="w3-black">
                <th>#</th>
                <th>Username</th>
                <th>Role</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {tableUsers}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Board