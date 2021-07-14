import { add_question_data } from "../../../handlers/add_question_data";
export const add_question_form = () => {
  //div
  const f_div = document.createElement("div");
  f_div.classList = "form_div";
  // heading
  const h1 = document.createElement("h1");
  h1.innerHTML = "Add Question";

  const h3 = document.createElement("h3");
  h3.innerHTML = "Insert Options And Select Correct Answers  ";

  // Create a form
  const form = document.createElement("form");
  form.id = "add_question";
  form.classList = "addQForm";
  // input field for question
  const question = document.createElement("input");
  question.type = "text";
  question.id = "question";
  question.classList = "questionclass";
  question.placeholder = "Question";
  question.required = "required";
  // Create checkboxes and options//
  const opt1 = document.createElement("input");
  opt1.type = "checkbox";
  opt1.id = "ch1";
  opt1.classList = "chk";

  const label1 = document.createElement("input");
  label1.type = "text";
  label1.id = "option1";
  label1.classList = "opt";
  label1.required = "required";
  label1.appendChild(document.createTextNode("opt1"));

  const opt2 = document.createElement("input");
  opt2.type = "checkbox";
  opt2.id = "ch2";
  opt2.classList = "chk";

  const label2 = document.createElement("input");
  label2.type = "text";
  label2.id = "option2";
  label2.classList = "opt";
  label2.required = "required";
  label2.appendChild(document.createTextNode("opt2"));

  const opt3 = document.createElement("input");
  opt3.type = "checkbox";
  opt3.id = "ch3";
  opt3.classList = "chk";

  const label3 = document.createElement("input");
  label3.type = "text";
  label3.id = "option3";
  label3.classList = "opt";
  label3.required = "required";
  label3.appendChild(document.createTextNode("opt3"));

  const opt4 = document.createElement("input");
  opt4.type = "checkbox";
  opt4.id = "ch4";
  opt4.classList = "chk";

  const label4 = document.createElement("input");
  label4.type = "text";
  label4.id = "option4";
  label4.classList = "opt";
  label4.required = "required";
  label4.appendChild(document.createTextNode("opt4"));

  // create a submit button
  const s = document.createElement("BUTTON");
  s.innerHTML = "Submit";
  s.classList = "submit";

  const br = document.createElement("br");
  // Append  heading, question,options,checkbox into form
  form.appendChild(h1);
  form.appendChild(br.cloneNode());

  form.appendChild(h3);
  form.appendChild(br.cloneNode());

  form.appendChild(question);
  form.appendChild(br.cloneNode());

  form.appendChild(opt1);
  form.appendChild(label1);
  form.appendChild(br.cloneNode());

  form.appendChild(opt2);
  form.appendChild(label2);
  form.appendChild(br.cloneNode());

  form.appendChild(opt3);
  form.appendChild(label3);
  form.appendChild(br.cloneNode());

  form.appendChild(opt4);
  form.appendChild(label4);
  form.appendChild(br.cloneNode());

  form.appendChild(s);
  form.appendChild(br.cloneNode());

  form.addEventListener("submit", add_question_data);

  f_div.appendChild(form);
  //return form;
  return f_div;
};
