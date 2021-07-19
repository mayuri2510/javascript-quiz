import { state } from "../init/state";
export const add_question_data = (event) => {
  event.preventDefault();
  const form = event.target;
  // get value from form
  const newQuestion = {
    question: form.question.value,
    answered: false,
    answers: [
      {
        text: form.option1.value,
        correct: form.ch1.checked,
        selected: false,
      },
      {
        text: form.option2.value,
        correct: form.ch2.checked,
        selected: false,
      },
      {
        text: form.option3.value,
        correct: form.ch3.checked,
        selected: false,
      },
      {
        text: form.option4.value,
        correct: form.ch4.checked,
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
  //console.log("Test", state.questions);
  alert("Question Added Succefully!");
  const form_Reset = document.querySelector(".addQForm");
  form_Reset.reset();
};
