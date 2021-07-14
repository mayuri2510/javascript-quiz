import { check } from "prettier";
import { state } from "../init/state";
export const add_question_data = (event) => {
  event.preventDefault();

  //const q_value = document.querySelector("#question").value;
  // state.questions.push({ question: q_value, answered: false });

  //----- checkbox----------------------------------------------------

  const currentQuestionIndex = state.currentQuestion;

  const question = state.questions[currentQuestionIndex];

  const check_box = document.querySelectorAll(".chk");
  //console.log("check_box all:", check_box);
  const check_array = [];
  for (let i = 0; i < check_box.length; i++) {
    //
    //correct: check_box[i].checked,
    // state.questions[0].answers[0].push({
    //   correct: check_box[i].checked,
    // });
    //check_array.push(check_box[i].checked);

    //question.answers[i].correct = check_box[i].checked;
    //question.answers[i].selected = false;

    question.answers.push({
      correct: check_box[i].checked,
    });
  }
  console.log("question", question);

  //-------------------------------------options-----------------------------------

  const options = document.querySelectorAll(".opt");
  //console.log("options all:", options);
  const options_array = [];

  for (let j = 0; j < options.length; j++) {
    // state.questions["answers"].push({
    //   text: options[i].value,
    //   selected: false,
    // });
    // state.questions[0].answers[0].push({
    //   text: options[i].value,
    //   selected: false,
    // });
    //  options_array.push(options[j].value);
    question.answers.push({
      text: options[j].value,
      selected: false,
    });
  }
  // console.log("options_array", options_array);

  //------------------------------------------------------------------
  //   state.questions.links.push({
  //     links: "javascript.info",
  //     url: "https://javascript.info/variables",
  //   });

  //-----------push data -----------------------------------------------//
  //   state.questions.push({ question: q_value, answered: false });
  //   state.questions.answers.push({
  //     text: option1,
  //     correct: ch1,
  //     selected: false,
  //   });

  //   state.questions.answers.push({
  //     text: option1,
  //     correct: ch1,
  //     selected: false,
  //   });
  //=======================================================================================================//
  //console.log("finally data push:", state.questions);
};
