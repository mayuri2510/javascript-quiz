import { add_question_form } from "../components/pages/questions/add_question_form";

export const add_question = (event) => {
  const target = event.target;
  console.log("target:", target);
  const form = add_question_form();

  const bodycontainer = document.querySelector(".body");

  console.log("bodycontainer:", bodycontainer);
  bodycontainer.innerHTML = "";
  bodycontainer.appendChild(form);
};
