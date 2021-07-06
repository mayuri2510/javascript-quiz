//import { state } from "../../init/state.js";
import { state } from "../init/state.js";
import { makeInstructions } from "../components/pages/home/instructions.js";

export const n_questions = () => {
  // window.onload = (event) => {
  console.log("page is fully loaded");
  const n_q = state.questions.length;
  //const q_length = n_q.length;
  console.log("finally lenght--->:", n_q);
  return makeInstructions(n_q);

  // };
  //const le = n_q.length;
  //return le;
  console.log("calling handler.....", state.questions);

  //return n_q;
};

//import { state } from "../init/state.js";

// export const restartQuiz = () => {
//   // We use a map to recreate each question and modify it at the same time
//   console.log("working.............");
//   // const questions = state.questions.map((question) => {
//   //   const defaultQuestion = JSON.parse(JSON.stringify(question)); // make a hard copy of the question
//   //   defaultQuestion.answered = false;
//   //   const defaultAnswers = question.answers.map((answer) => {
//   //     const defaultAnswer = JSON.parse(JSON.stringify(answer)); // make a hard copy of the answer
//   //     defaultAnswer.selected = false;
//   //     return defaultAnswer;
//   //   });
//   //   defaultQuestion.answers = defaultAnswers;
//   //   return defaultQuestion;
//   // });
//   // state.questions = questions; // overwrite the question in the state with the copied questions that have been modified
// };
