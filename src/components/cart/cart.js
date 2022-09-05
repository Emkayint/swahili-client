import { useContext, useEffect, useState } from "react";
import { UserContext} from "../../context/user";
import "./cart.css"
import Contact from "./contact/Contact";
import Itemscard from "./items-card/items"

function Cart() {
  const [items, setItems] = useState([])
  const {user} = useContext(UserContext) 

  useEffect(() => {
    fetch('/orders')
    .then(r => {
      if(r.ok){
        r.json().then(setItems)
      }
    })
  }, [])
  

  const itemsToDisplay = items.map((item) => (
    <Itemscard
      name={item.product.name}
      amount={item.quantity}
      key={item.id}
      id={item.id}
      price= {item.product.price}
      image= {item.product.image}
    />
  ));


  return (
    <div className="cart">
      <div className="roww">
        <div className="card-content col-s-6 col-8">
          <div className="cart-header">Shoppig Cart</div>
            {itemsToDisplay}
        </div>
        <div className="col-s-6 col-4">
          {user ? <Contact items = { items } setItems = {setItems}/> : null }
          
        </div>
      </div>
    </div>
  );
}

export default Cart