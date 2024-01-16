import React, { useContext, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import "./add.css";
const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      price,
      image,
    };
    if (!title.trim() || !price || !image.trim()) {
      return;
    } else {
      createProduct(newProduct);
      navigate("/");
    }
  }

  return (
    <div
      className="add"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        className="add__actions"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Название"
        type="text"
      />
      <input
        className="add__actions"
        onChange={(e) => setPrice(+e.target.value)}
        value={price}
        placeholder="Цена"
        type="number"
      />
      <input
        className="add__actions"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        placeholder="Изображение"
        type="text"
      />
      <button className="add__actions" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default AddProduct;
