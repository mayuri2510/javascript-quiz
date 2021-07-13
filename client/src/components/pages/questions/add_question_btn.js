import { add_question_form } from "../../../handlers/add_question_form";
export const add_btn = () => {
  const button = document.createElement("BUTTON");
  button.innerText = "Add Question";
  button.classList = "add-btn";

  button.addEventListener("click", add_question_form);
  return button;
};
