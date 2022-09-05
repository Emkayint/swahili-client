import "./Menu.css"
import OrderCard from "../OrderCard/OrderCard"
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
const Menu = () => {
  const products = useFetch("/products")

  const productsToDisplay = products.map((product) => (
    <OrderCard
      name={product.name}
      price={product.price}
      image={product.image}
      key = {product.id}
      id = {product.id}
    />
  ));
  return (
    <div className="hero">
      <div className="menu">
        <div className="menu-header">
          <p>Our Menu</p>
        </div>
        <div className="roww">
          {productsToDisplay}
        </div>
      </div>
    </div>
  );
}

export default Menu