import { state } from "../init/state.js";
import { reverse } from "../logic/reverse.js";

export const changeGreeting = (event) => {
  state.greeting = event.target.value;
  //const n_questions = state.questions;
  // console.log("nquestion-->", state.questions);
  document.getElementById("mirrored").innerHTML = reverse(state.greeting);
};

// export const number_of_questions = (event) => {
//   const n_questions = state.questions;
//   console.log("value of state->", n_questions);
//   for (i = 0; i < n_questions.length; i++) {
//     state.questions[i].question;
//   }
// };
