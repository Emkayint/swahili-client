import { useState } from "react";
import "./OrderCard.css";

const OrderCard = ({name, price, description, image, id}) => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("jwt")
  function handleClick(){
    setLoading(!loading)
    fetch("https://swahili-spot-production.up.railway.app/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_id: id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((res) => {
          alert("Success");
          console.log(res)
          setLoading(!loading);
        });
      } else {
        alert("You Need To Log In First!");
        setLoading(!loading);
      }
    });
    setLoading(!loading)
  }

  return (
    <div className="col-s-6 col-3 col-sm-12 cards">
      <div className="card-menu">
        <i className="hrr s-h"></i>
        <img src={image} alt="" className="image" />
        <i className="hrr "></i>
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