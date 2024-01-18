import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, isError] = useState(false);
  const navigate = useNavigate();
  const handleLoginSubmit = async () => {
    if (email || password) {
      await login(email, password);
      navigate("/");
    } else {
      return isError(true);
    }
  };
  return (
    <>
      {" "}
      <div className="login__form">
        <h1>Авторизация</h1>
        {error ? <p style={{ color: "red" }}>Ошибка, заполните поля!</p> : null}
        <input
          type="email"
          placeholder="Введите почту"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login__remember">
          {" "}
          <span>Больше не выходить из системы</span>
          <input type="checkbox" />
        </div>
        <button onClick={() => handleLoginSubmit()}>Авторизоваться</button>
        <div className="login__tologin">
          {" "}
          <span>Нет аккаунта?</span>
          <a onClick={() => navigate("/register")}>Зарегистрироваться</a>
        </div>
      </div>
    </>
  );
};

export default Login;
