import React, { useState } from "react";
import "./Register.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, isError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (email || password) {
      await register(email, password);
      navigate("/");
    } else {
      return isError(true);
    }
  };
  return (
    <>
      <div className="register__form">
        <h1>Регистрация</h1>
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
        <div className="register__remember">
          {" "}
          <span>Запомнить меня</span>
          <input type="checkbox" />
        </div>
        <button onClick={() => handleSubmit()}>Зарегистрироваться</button>
        <div className="register__tologin">
          {" "}
          <span>Есть аккаунт?</span>
          <a onClick={() => navigate("/login")}>Войти</a>
        </div>
      </div>
    </>
  );
};

export default Register;
