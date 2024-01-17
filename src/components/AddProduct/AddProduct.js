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
  const [category, setCategory] = useState("");
  function handleSave() {
    const newProduct = {
      title,
      price,
      category,
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
      <select
        className="add__actions"
        style={{ padding: "10px 35px" }}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option name="ekshen" value="Экшен">
          Экшен
        </option>
        <option name="casual" value="Казуальное">
          Казуальные
        </option>
        <option name="golovolomki" value="Головоломки">
          Головоломки
        </option>
        <option name="arcade" value="Аркады">
          Аркады
        </option>
        <option name="strategy" value="Стратегия">
          Стратегия
        </option>
        <option name="shooters" value="Шутеры">
          Шутеры
        </option>
        <option name="table" value="Настольные игры">
          Настольные игры
        </option>
        <option name="adventure" value="Приключения">
          Приключения
        </option>
        <option name="simulation" value="Симулятор">
          Симуляторы
        </option>
        <option name="world" value="Открытый мир">
          Открытый мир
        </option>
      </select>
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
