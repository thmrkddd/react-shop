import React, { useState } from "react";
import "./Register.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { authWithGoogle, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
    navigate("/");
  };
  return (
    <>
      <form className="register__form">
        <h1>Регистрация</h1>
        {error && <p>{error}</p>}
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
        <button onClick={handleSubmit}>Зарегистрироваться</button>
        <button onClick={() => authWithGoogle()}>Продолжить с Google</button>
        <div className="register__remember">
          {" "}
          <span>Запомнить меня</span>
          <input type="checkbox" />
        </div>
        <div className="register__tologin">
          {" "}
          <span>Есть аккаунт?</span>
          <a href="/login">Войти</a>
        </div>
      </form>
    </>
  );
};

export default Register;
