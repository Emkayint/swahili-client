import "./items.css"
import { useState } from "react";



function Itemscard({name, amount, id, image, price}){
  const [loading, setLoading] = useState(false)
  const [quantity, setQuantity]= useState(amount)
  const [deleted, setDeleted] = useState(false)

  function handleAdd(){
    setLoading(!loading)
    fetch(`/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, 
      body: JSON.stringify({
        quantity: (quantity + 1)
      })
    })
    .then(r => {
      if(r.ok){
        setQuantity(quantity => quantity + 1)
        setLoading(!loading)
        r.json().then(res => {
          setQuantity(quantity + 1)
        })
      } else {
        alert("Fatal error occoured")
      }
    })
  }
  function handleMinus(){
    if( quantity === 1){
      alert("Meeen!! This Is awkward do You want to delete instead?")
      setLoading(!loading)
    } else {
      setLoading(!loading)
      fetch(`/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }, 
        body: JSON.stringify({
          quantity: quantity - 1
        })
      })
      .then(r => {
        if(r.ok){
          setLoading(!loading)
          r.json().then(res => setQuantity(res.quantity))
        } else {
          alert("Fatal error occoured")
        }
      })
    }

  }

  function handleDelete(){
    fetch(`/orders/${id}`, {
      method: "DELETE",
      "Accept" : "application/json",
      "Content-Type" : "application.json"
    }).then(r => {
      if(r.ok){
        setDeleted(!deleted)
      }

    })

  }
  return (
    <div className={ deleted ? "none": "items-card"}>
      <img src={image} alt="" />
      <div className="name-item">{name}</div>
      <div className="count ">
        <button onClick={handleMinus}>-</button>
        <span className="span">{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <p>ksh {price * quantity}</p>
      <div className="delete" onClick={handleDelete}>X</div>
    </div>
  );
}
export default Itemscard