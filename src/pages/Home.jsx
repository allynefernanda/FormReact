import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Nav />
      <div id="home">
        <h1>Bem-vindo à Sorveteria Sabor Gelado!</h1>
        <p className="home-paragraph">
          Descubra um mundo de sabores refrescantes e momentos de doçura em
          nossa sorveteria encantadora. Participe da nossa pesquisa e nos ajude
          a criar experiências ainda mais memoráveis! Queremos conhecer você
          melhor, entender seus gostos e preferências, para continuar encantando
          você a cada visita.
        </p>
        <Link to="/forms">
          <button type="button" style={{ backgroundColor: "#FF69B4" }}>
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
