import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import List from "../List/List";
import Lego from "../../img/lego.jpg";
import RocketRacing from "../../img/rocketracing.jpg";
import Immortals from "../../img/33immortals.png";
import Spiderman from "../../img/spiderman.jpg";
import VisaCard from "../../img/symbols.png";
import Gift from "../../img/gift-box-with-a-bow.png";
const Main = () => {
  const navigate = useNavigate();

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
        <h2 style={{ textAlign: "center" }}>Специальные предложения</h2>
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
              <p>И получайте 2 любые видеоигры на выш выбор в подарок!</p>
            </div>
            <img className="hero__img hero__gift" src={Gift} alt="card" />
          </div>
        </div>
      </div>
      <div className="container articles">
        <h2 style={{ textAlign: "center" }}>Новинки</h2>
        <div className="articles__content">
          <div className="article__card">
            <img src={Lego} alt="img" />
            <div className="article__text">
              <p>Дата выхода: 07.12.2023</p>
              <h4>LEGO® Fortnite®</h4>
              <p className="article__info">
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
              <p>Дата выхода: 08.12.23</p>
              <h4>Rocket Racing </h4>
              <p className="article__info" s>
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
              <p>Дата выхода: Скоро</p>
              <h4>33 Immortals </h4>
              <p className="article__info">
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
