import "./home.component.css";
import Logo from "../../assets/image.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const [error, setError] = useState("");
  const [birthdateInput, setBirthdateInput] = useState("");
  const [cpfInput, setCpfInput] = useState("");
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

  function formatBirthdate(value) {
    if (!value) return value;
    const birthdate = value.replace(/[^\d]/g, "");
    const birthdateLength = birthdate.length;

    if (birthdateLength < 2) return birthdate;
    if (birthdateLength < 4) {
      return `${birthdate.slice(0, 2)}/${birthdate.slice(2, 4)}`;
    }
    return `${birthdate.slice(0, 2)}/${birthdate.slice(2, 4)}/${birthdate.slice(
      4,
      8
    )}`;
  }

  function handleBirthdateInput(e) {
    const formattedBirthdate = formatBirthdate(e.target.value);
    setBirthdateInput(formattedBirthdate);
  }

  function formatCpf(value) {
    if (!value) return value;
    const cpf = value.replace(/[^\d]/g, "");
    const cpfLength = cpf.length;

    if (cpfLength < 3) return cpf;
    if (cpfLength < 6) {
      return `${cpf.slice(0,3)}.${cpf.slice(3,5)}`
    }
    if (cpfLength < 9){
      return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}`
    }

    return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`
  }

  function handleCpfInput(e) {
    const formattedCpf = formatCpf(e.target.value);
    setCpfInput(formattedCpf);
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
              className="form-input text-box"
              type="text"
              placeholder="Escreva seu nome"
              name="name"
            />
          </label>

          <label className="home-form-label">
            <span>Sobrenome:</span>
            <input
              className="form-input text-box"
              type="text"
              placeholder="Escreva seu sobrenome"
              name="lastName"
            />
          </label>

          <label className="home-form-label">
            <span>Idade:</span>
            <input
              className="form-input text-box"
              type="text"
              placeholder="00/00/0000"
              name="birthdate"
              onChange={(e) => handleBirthdateInput(e)}
              value={birthdateInput}
              minLength={10}
            />
          </label>

          <label className="home-form-label">
            <span>Email:</span>
            <input
              className="form-input text-box"
              type="email"
              placeholder="Escreva seu e-mail"
              name="email"
            />
          </label>

          <label className="home-form-label">
            <span>CPF:</span>
            <input
              className="form-input text-box"
              type="text"
              placeholder="000.000.000-00"
              name="cpf"
              onChange={(e) => handleCpfInput(e)}
              value={cpfInput}
              minLength={14}
            />
          </label>

          <label className="home-form-label checkbox-container">
            <input
              className="form-input checkbox"
              type="checkbox"
              name="checkbox"
            />
            <span className="checkmark"></span>
            <span className="checkbox-text">Aceito os termos e condições</span>
          </label>
          {error && <span className="home-error">{error}</span>}
          <button className="home-submit-button">ENVIAR</button>
          <div className="already-member">
            <span>I&apos;m already a member</span>
            <hr />
          </div>
        </form>
      </section>{" "}
      {/* form section */}
    </div>
  );
}

export default Home;
