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
      <div className="path">
        <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Главная
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
            fill="#414141"
          />
        </svg>
        <p style={{ cursor: "pointer" }}>Изменение продукта</p>
      </div>
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
