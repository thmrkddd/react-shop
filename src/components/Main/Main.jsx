import React from "react";
import { useNavigate } from "react-router-dom";
import List from "../List/List";
import "./main.css";
import Lego from "../../img/lego.jpg";
import RocketRacing from "../../img/rocketracing.jpg";
import Immortals from "../../img/33immortals.png";
import Spiderman from "../../img/spiderman.jpg";
import VisaCard from "../../img/free-icon-visa-logo-1863.png";
import Gift from "../../img/free-icon-gift-box-3727213.png";
const Main = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const Map = document.getElementById("map");
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac69cb4b3160d8b4efbbec50b1dcbfd5745c5add07c9cff84d462fbf06bfa67ea&amp;width=1200&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
  //   script.async = true;
  //   Map.appendChild(script);
  // }, []);

  return (
    <div className="main">
      <div className="background">
        <div className="container bg__container">
          <img className="bg__products" src={Spiderman} alt="products" />
        </div>
      </div>
      <div className="container add">
        <h2>Игры</h2>
        <h4 onClick={() => navigate("/add")}>Добавить игру</h4>
      </div>
      <div>
        <List />
      </div>
      <div className="container hero">
        <h2>Специальные предложения</h2>
        <div className="hero__cards">
          <div className="hero__card hero__card-blue">
            <div>
              <h3>Оплачивайте картой VISA</h3>
              <p>И получайте бонусные скидки при покупке в магазинах!</p>
            </div>
            <img className="hero__img" src={VisaCard} alt="card" />
          </div>
          <div className="hero__card hero__card-red">
            <div>
              <h3>Загрузите наше приложение</h3>
              <p>И получайте 2 любые видеоигры на выш выбор!</p>
            </div>
            <img className="hero__img" src={Gift} alt="card" />
          </div>
        </div>
      </div>
      {/* <div className="container shop">
        <h2>Наш магазин</h2>
        <div id="map" className="yandex-map"></div>
      </div> */}
      <div className="container articles">
        <h2>Новинки</h2>
        <div className="articles__content">
          <div className="article__card">
            <img src={Lego} alt="img" />
            <div className="article__text">
              <p style={{ color: "#414141" }}>Дата выхода: 07.12.2023</p>
              <h4 style={{ color: "#414141" }}>LEGO® Fortnite®</h4>
              <p className="article__info" style={{ color: "#414141" }}>
                Проявите творческий подход к созданию и настройке своей
                идеальной домашней базы, используя элементы LEGO®, собранные в
                окружающем вас мире, а затем нанимайте жителей деревни, чтобы
                они собирали материалы и помогали пережить ночь.
              </p>
            </div>
          </div>
          <div className="article__card">
            <img src={RocketRacing} alt="img" />
            <div className="article__text">
              <p style={{ color: "#414141" }}>Дата выхода: 08.12.23</p>
              <h4 style={{ color: "#414141" }}>Rocket Racing </h4>
              <p className="article__info" style={{ color: "#414141" }}>
                Благодаря межигровому шкафчику транспортных средств вы сможете
                делиться своими любимыми автомобилями между Rocket League и
                Fortnite. Настройте свою поездку и гоняйте без ограничений —
                играйте в Rocket Racing сегодня в Fortnite бесплатно!
              </p>
            </div>
          </div>
          <div className="article__card">
            <img src={Immortals} alt="img" />
            <div className="article__text">
              <p style={{ color: "#414141" }}>Дата выхода: Скоро</p>
              <h4 style={{ color: "#414141" }}>33 Immortals </h4>
              <p className="article__info" style={{ color: "#414141" }}>
                33 Immortals — это кооперативный экшен-рогалик для 33 игроков.
                Сыграйте проклятую душу и восстайте против окончательного суда
                Бога. Собирайтесь и совершайте рейды, сотрудничайте, чтобы
                выжить среди полчищ монстров, побеждайте огромных боссов и
                столкнитесь с гневом Бога в борьбе за свою вечную жизнь.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
