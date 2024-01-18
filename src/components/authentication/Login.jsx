import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { user, login, authWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLoginSubmit = async () => {
    try {
      await login(email, password);
    } catch (error) {
      setError(error);
    }
    navigate("/");
  };
  return (
    <>
      {" "}
      <form className="login__form">
        <h1>Авторизация</h1>
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
        <button onClick={handleLoginSubmit}>Зарегистрироваться</button>
        <button onClick={() => authWithGoogle()}>Продолжить с Google</button>
        <div className="login__tologin">
          {" "}
          <span>Нет аккаунта?</span>
          <a href="/register">Зарегистрироваться</a>
        </div>
      </form>
    </>
  );
};

export default Login;
