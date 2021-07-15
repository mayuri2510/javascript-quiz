import { state } from "../init/state";
export const add_question_data = (event) => {
  event.preventDefault();

  // get value from form
  const newQuestion = {
    question: document.querySelector("#question").value,
    answered: false,
    answers: [
      {
        text: document.querySelector("#option1").value,
        correct: document.querySelector("#ch1").checked,
        selected: false,
      },
      {
        text: document.querySelector("#option2").value,
        correct: document.querySelector("#ch2").checked,
        selected: false,
      },
      {
        text: document.querySelector("#option3").value,
        correct: document.querySelector("#ch3").checked,
        selected: false,
      },
      {
        text: document.querySelector("#option4").value,
        correct: document.querySelector("#ch4").checked,
        selected: false,
      },
    ],
    links: [
      {
        text: "javascript.info",
        url: "https://javascript.info/types#type-typeof",
      },
      {
        text: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
      },
    ],
  };
  state.questions.push(newQuestion);
  // console.log("Test", state.questions);
  alert("Question Added Succefully!");
  const form_Reset = document.querySelector(".addQForm");
  form_Reset.reset();
};
