import "./Error.css"

import React, { useState } from 'react'



function Error({ setErrors}) {

  function handleClick(){
    setErrors(null)
  }
  return (
    <div>
      <div >!! password should be 8 char, name & phone should be unique !!</div>
      <button onClick={handleClick}>X</button>
    </div>
  );
}

export default Error