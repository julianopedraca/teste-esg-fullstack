import "./home.component.css";
import Logo from "../../assets/image.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { state } = useLocation();
  let usersArr = state ? [...state] : [];

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const { name, lastName, email, cpf, checkbox, birthdate } = formJson;

    if (!(name && lastName && email && cpf && checkbox && birthdate)) {
      setError("*todos os campos são obrigatórios");
      return;
    }

    usersArr.unshift(formJson);

    navigate("/dashboard", { state: { usersArr } });
  }
  return (
    <div className="home-container">
      <section className="logo-section-container">
        <img src={Logo} alt="logo-img" className="home-logo-img" />
      </section>
      {/* logo section*/}
      <section className="form-section-container">
        <h1 className="form-title">TESTE</h1>
        <h2 className="form-subtitle">EGS SISTEMAS</h2>
        <form onSubmit={handleSubmit}>
          <label className="home-form-label">
            <span>Nome:</span>
  
            <input
              className="form-input"
              type="text"
              placeholder="Escreva seu nome"
              name="name"
            />
          </label>
          <label className="home-form-label">
            <span>Sobrenome:</span>
  
            <input
              className="form-input"
              type="text"
              placeholder="Escreva seu sobrenome"
              name="lastName"
            />
          </label>
          <label className="home-form-label">
            <span>Idade:</span>
  
            <input
              className="form-input"
              type="text"
              placeholder="00/00/0000"
              name="birthdate"
            />
          </label>
          <label className="home-form-label">
            <span>Email:</span>
  
            <input
              className="form-input"
              type="email"
              placeholder="Escreva seu e-mail"
              name="email"
            />
          </label>
          <label className="home-form-label">
            <span>CPF:</span>
  
            <input
              className="form-input"
              type="text"
              placeholder="000.000.000-00"
              name="cpf"
            />
          </label>
          <label className="home-form-label checkbox">
            <input
              className="form-input "
              type="checkbox"
              placeholder="000.000.000-00"
              name="checkbox"
            />
            <span>Aceito os termos e condições</span>
          </label>
          {error && <span className="home-error">{error}</span>}
          <button className="home-submit-button">ENVIAR</button>
          <span>I&apos;m already a member</span>
        </form>
      </section>{" "}
      {/* form section */}
    </div>
  );
}

export default Home;
