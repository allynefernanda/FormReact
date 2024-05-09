import React from "react";
import Nav from "./Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <div id="about">
        <h1>Conheça a Sorveteria Gelato</h1>
        <p className="about-paragraph">
          Descubra um refúgio refrescante no centro da cidade. Na Sorveteria
          Gelato, oferecemos uma variedade de sabores artesanais que vão desde
          os clássicos até os mais criativos. Desfrute de momentos deliciosos
          com amigos e família enquanto experimenta nossas irresistíveis opções
          de sorvete e coberturas.
        </p>
        <p className="about-paragraph">
          Venha nos visitar e deixe-nos transformar seu dia com nossas delícias
          geladas!
        </p>
      </div>
    </div>
  );
};

export default About;
