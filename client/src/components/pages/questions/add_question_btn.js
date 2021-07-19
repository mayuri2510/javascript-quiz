import { add_question } from "../../../handlers/add_question";
export const add_btn = () => {
  const button = document.createElement("BUTTON");
  button.innerText = "Add Question";
  button.classList = "add-btn";

  button.addEventListener("click", add_question);
  return button;
};
