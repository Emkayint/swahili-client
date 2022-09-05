import { useState } from "react";
import "./OrderCard.css";

const OrderCard = ({name, price, description, image, id}) => {
  const [loading, setLoading] = useState(false);
  function handleClick(){
    setLoading(!loading)
    fetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        Accept: "application/json"
      }, 
      body: JSON.stringify({
        product_id: id
      })
    })
    .then(r => {
      if(r.ok){
        r.json().then(res => {
          alert("Success")
          setLoading(!loading)
        })
      } else {
        alert("You Need To Log In First!")
        setLoading(!loading)
      }
    })
  }

  return (
    <div className="col-s-6 col-3 cards">
      <div className="card-menu">
        <br />
        <br />
        <span className="hrr"></span>
        <img src={image} alt="" className="image" />
        <span className="hrr"></span>
        <div className="info">
          <div className="price">{`ksh ${price}`}</div>
          <div className="more-info">i</div>
        </div>
        <div className="name">
          <p>{name}</p>
          <button onClick={handleClick} disabled = {loading ? true : false}>ADD</button>
        </div>
      </div>
    </div>
  );
} 

export default OrderCard