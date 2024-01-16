import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import Search from "../../img/search.svg";
import Favourite from "../../img/favourite.png";
import Cart from "../../img/grocery-store.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Badge } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
const Header = () => {
  const { count } = useContext(cartContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState(
    searchParam.get("q") ? searchParam.get("q") : ""
  );
  const navigate = useNavigate();
  useEffect(() => {
    setSearchParam({
      q: search,
    });
  }, [search]);
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h3 onClick={() => navigate("/")}>GAME STORE</h3>
          <div className="header__search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Найти товар"
            />
            <img src={Search} alt="search" />
          </div>
          <div onClick={() => navigate("/favourite")} className="header__ftrs">
            <img src={Favourite} alt="favorite" width="25px" />
            <p>Избранное</p>
          </div>
          <div onClick={() => navigate("/cart")} className="header__ftrs">
            <Badge
              style={{
                padding: "0 0 5px 25px",
              }}
              badgeContent={count}
              color="error"
            ></Badge>
            <img src={Cart} alt="cart" width="25px" />
            <p>Корзина</p>
          </div>{" "}
          <div className="header__download">
            {" "}
            <button>Загрузить</button>
          </div>
          <div className="header__avatar">
            <LoginButton />
            <LogoutButton />
            <Profile />
            {/* <img src={Avatar} alt="avatar" />
            <p>Alex</p> */}
          </div>{" "}
        </div>
      </div>
    </header>
  );
};
export default Header;
