import React from "react";
import Nav from "./Nav";

function NameInput() {
  return (
    <>
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" required placeholder="Digite seu nome" />
      <br />
    </>
  );
}

function EmailInput() {
  return (
    <>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required placeholder="Digite seu email" />
      <br />
    </>
  );
}

function AgeInput() {
  return (
    <>
      <label htmlFor="age">Idade:</label>
      <input type="number" id="age" min="1" placeholder="Digite sua idade" />
      <br />
    </>
  );
}

function FlavorDropdown() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "morango", label: "Morango" },
    { value: "baunilha", label: "Baunilha" },
    { value: "caramelo", label: "Caramelo" },
    { value: "limao", label: "Limão" },
  ];

  return (
    <>
      <label htmlFor="dropdown">Qual sabor mais gostou:</label>
      <select id="dropdown">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <br />
    </>
  );
}

function SizeChoices() {
  const options = ["pequeno", "médio", "grande"];

  return (
    <fieldset>
      <legend>Qual tamanho você escolheu:</legend>
      {options.map((option) => (
        <label key={option}>
          <input type="radio" name="size" value={option} />{" "}
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
      <br />
    </fieldset>
  );
}

function ToppingsChoices() {
  const options = ["chocolate", "frutas", "marshmallow", "chantilly", "outros"];

  return (
    <fieldset>
      <legend>Quais os toppings você mais gosta:</legend>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" name="topping" value={option} />{" "}
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
      <br />
    </fieldset>
  );
}

function ProfilePictureInput() {
  return (
    <fieldset>
      <label htmlFor="profile-picture">Envie uma foto comendo sorvete:</label>
      <input id="profile-picture" type="file" name="file" />
      <br />
    </fieldset>
  );
}

function CommentTextArea() {
  return (
    <fieldset>
      <label htmlFor="comments">Comentários adicionais:</label>
      <textarea
        id="comments"
        name="comments"
        placeholder="Digite seus comentários"
      ></textarea>
      <br />
    </fieldset>
  );
}

export default function Forms() {
  return (
    <div>
      <Nav />
      <form id="survey-form">
        <NameInput />
        <EmailInput />
        <AgeInput />
        <FlavorDropdown />
        <SizeChoices />
        <ToppingsChoices />
        <ProfilePictureInput />
        <CommentTextArea />
        <fieldset>
          <label htmlFor="terms-and-conditions">
            <input
              type="checkbox"
              id="terms-and-conditions"
              required
              name="terms-and-conditions"
            />
            Eu aceito os{" "}
            <a href="https://www.freecodecamp.org/news/terms-of-service/">
              termos e condições
            </a>
          </label>
        </fieldset>
        <div id="submit">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
