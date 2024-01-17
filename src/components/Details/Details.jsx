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
  let min = 1000;
  let max = 10000000;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return oneProduct ? (
    <div>
      <div className="container">
        <div className="info">
          <h2>Название: {oneProduct.title}</h2>
          <h3>Цена: {oneProduct.price}</h3>
          <h3>Жанр: {oneProduct.category}</h3>
          <h4>Код продукта: {randomNumber}</h4>
          <img src={oneProduct.image} width="50%" alt="product" />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Details;
