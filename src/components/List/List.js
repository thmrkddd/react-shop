import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productsContext } from "../../contexts/productsContext";
import { useSearchParams } from "react-router-dom";
import { Pagination, Slider } from "@mui/material";
import "./List.css";
const List = () => {
  const { getProducts, pages, products, deleteProduct } =
    useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([0, 10000]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState(
    searchParam.get("q") ? searchParam.get("q") : ""
  );
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParam({
      q: search,
    });
  }, [search]);
  useEffect(() => {
    setSearchParams({
      _page: currentPage,
      _limit: 8,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="container">
      <div className="category__select">
        <button value="Экшен" onClick={(e) => setSearch(e.target.value)}>
          Экшен
        </button>
        <button value="Казуальные" onClick={(e) => setSearch(e.target.value)}>
          Казуальные
        </button>
        <button value="Головоломки" onClick={(e) => setSearch(e.target.value)}>
          Головоломки
        </button>
        <button value="Аркады" onClick={(e) => setSearch(e.target.value)}>
          Аркады
        </button>
        <button value="Стратегия" onClick={(e) => setSearch(e.target.value)}>
          Стратегия
        </button>
        <button value="Шутеры" onClick={(e) => setSearch(e.target.value)}>
          Шутеры
        </button>
        <button
          value="Настольные игры"
          onClick={(e) => setSearch(e.target.value)}
        >
          Настольные игры
        </button>
        <button value="Приключения" onClick={(e) => setSearch(e.target.value)}>
          Приключения
        </button>
        <button value="Симулятор" onClick={(e) => setSearch(e.target.value)}>
          Симулятор
        </button>
        <button value="Открытый мир" onClick={(e) => setSearch(e.target.value)}>
          Открытый мир
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",

          marginTop: "20px",
          flexDirection: "column",
        }}
        className="container container-parent"
      >
        <p
          style={{
            fontSize: "18px",
          }}
        >
          По цене:
        </p>
        <div className="slider__parent">
          <div
            className="slider-parent"
            style={{
              width: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "10px 0 20px 0",
            }}
          >
            <p>0</p>
            <Slider
              className="slider"
              style={{
                width: "500px",
                color: "rgb(255, 102, 51)",
              }}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
              step={1}
            />
            <p>10000</p>
          </div>
        </div>
      </div>
      <div className="products__cards container">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <Pagination
        className="pagination"
        onChange={(event, page) => setCurrentPage(page)}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        count={pages}
      />
    </div>
  );
};

export default List;
