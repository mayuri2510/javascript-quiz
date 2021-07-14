import { check } from "prettier";
import { state } from "../init/state";
export const add_question_data = (event) => {
  //const t = event.target;
  event.preventDefault();
  console.log("target for submit form:", event.target);
  const q_value = document.querySelector("#question").value;
  console.log("q_value", q_value);

  //state.questions.push({ question: q_value, answered: false });
  //--------------------------------------------
  //const answer_ed= false,
  //---------------------------------------------------------
  //   const ch1 = document.querySelector("#ch1").checked;
  //   console.log("ch1:", ch1);

  //   const ch2 = document.querySelector("#ch2").checked;
  //   console.log("ch2:", ch2);

  //   const ch3 = document.querySelector("#ch3").checked;
  //   console.log("ch3:", ch3);

  //   const ch4 = document.querySelector("#ch4").checked;
  //   console.log("ch4:", ch4);

  const check_array = [];
  const check_box = document.querySelectorAll(".chk");
  console.log("check_box all:", check_box);
  for (let i = 0; i < check_box.length; i++) {
    check_array.push(check_box[i].checked);
    //state.questions.answers.push({
    //     correct:check_box[i].checked,
    //   });
  }
  console.log("check_array", check_array);

  //   state.questions.answers.push({
  //     text: option1,
  //     correct: ch1,
  //     selected: false,
  //   });
  //---------------------------------------------------------

  const options = document.querySelectorAll(".opt");
  console.log("options all:", options);

  for (let j = 0; j < options.length; j++) {
    //state.questions.answers.push({
    //    text:options[i].value,
    //     selected: false,
    //   });
  }

  const option1 = document.querySelector("#option1").value;
  console.log("option1:", option1);

  const option2 = document.querySelector("#option2").value;
  console.log("option2:", option2);

  const option3 = document.querySelector("#option3").value;
  console.log("option3:", option3);

  const option4 = document.querySelector("#option4").value;
  console.log("option4:", option4);
  //-----------push data -----------------------------------------------//
  //   state.questions.push({ question: q_value, answered: false });
  //   state.questions.answers.push({
  //     text: option1,
  //     correct: ch1,
  //     selected: false,
  //   });
};
