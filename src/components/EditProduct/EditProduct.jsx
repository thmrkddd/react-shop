import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./edit.css";
import { productsContext } from "../../contexts/productsContext";

const EditProduct = () => {
  const { getOneProduct, oneProduct, updateProduct, getProducts } =
    useContext(productsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleSave() {
    const editedProduct = {
      title,
      price,
      category,
      image,
    };
    updateProduct(id, editedProduct);
    getProducts();
    navigate("/");
  }

  return (
    <div className="container">
      <div className="edit">
        <h4>Название</h4>
        <input
          className="edit__actions"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Название"
          type="text"
        />
        <h4>Цена</h4>

        <input
          className="edit__actions"
          onChange={(e) => setPrice(+e.target.value)}
          value={price}
          placeholder="Цена"
          type="text"
        />

        <h4>Категория</h4>
        <select
          className="edit__actions"
          style={{ padding: "10px 35px" }}
          onChange={(e) => setCategory(e.target.value)}
        >
          {" "}
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
        <h4>Изображение</h4>
        <input
          className="edit__actions"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="Изображение"
          type="text"
        />
        <button
          className="edit__actions"
          style={{ marginTop: "15px" }}
          onClick={handleSave}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
