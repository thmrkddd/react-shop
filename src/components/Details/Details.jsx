import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

import "./details.css";

const Details = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return oneProduct ? (
    <div>
      <div className="container">
        <div className="info">
          <h3>Название: {oneProduct.title}</h3>
          <p>Цена: {oneProduct.price}</p>
          <p>Жанр: {oneProduct.category}</p>
          <img src={oneProduct.image} width="50%" alt="product" />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Details;
