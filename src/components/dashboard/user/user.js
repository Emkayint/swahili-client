import React from 'react'
import "./user.css"

function User({id, username, phone, role }) {
  return (
    <tr className={id %2 === 0 ? "dark" : null}>
      <td>{id}</td>
      <td>{username}</td>
      <td>{role}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default User