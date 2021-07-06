//import { state } from "../../../init/state.js";

import { n_questions } from "../../../handlers/number-questions.js";
//import { state } from "../../../init/state.js";

export const makeInstructions = (count) => {
  console.log("final data...", count);

  const instructions = document.createElement("SECTION");
  instructions.classList = "instructions";
  const textTitle = document.createElement("H2");
  instructions.appendChild(textTitle);
  textTitle.innerText = "Instructions:";
  const paragraph = document.createElement("P");
  instructions.appendChild(paragraph);
  paragraph.innerText =
    `You can test your JavaScript skills with Quiz.
  The test contains ` +
    count +
    `  questions.
  You will get 1 point for each correct answer.
  At the end of the Quiz, your total score will be displayed.
  Keep in mind multiple choice is possible.
  There is no time limit. You can restart and do the test as many times as you want.
  Good luck!`;
  return instructions;
};

//makeInstructions(state.questions);
// import { state } from "../init/state.js";
// export const makeInstructions = () => {
//   const instructions = document.createElement("SECTION");
//   instructions.classList = "instructions";
//   const textTitle = document.createElement("H2");
//   instructions.appendChild(textTitle);
//   textTitle.innerText = "Instructions:";
//   const paragraph = document.createElement("P");
//   instructions.appendChild(paragraph);
//   paragraph.innerText = `You can test your JavaScript skills with Quiz.
//   The test contains 25 questions.
//   You will get 1 point for each correct answer.
//   At the end of the Quiz, your total score will be displayed.
//   Keep in mind multiple choice is possible.
//   There is no time limit. You can restart and do the test as many times as you want.
//   Good luck!`;
//   return instructions;
// };
