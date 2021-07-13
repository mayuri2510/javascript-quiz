import { doc } from "prettier";

export const add_question_form = () => {
  // Create a form synamically
  const form = document.createElement("form");
  form.id = "add_question";

  const question = document.createElement("input");
  question.type = "text";
  question.placeholder = "Question";
  //------------------------------------------------------------//
  const opt1 = document.createElement("input");
  opt1.type = "checkbox";

  const label1 = document.createElement("input");
  label1.type = "text";
  label1.appendChild(document.createTextNode("opt1"));
  //opt1.appendChild(label1);

  //-----------------------------------------------------//
  const opt2 = document.createElement("input");
  opt2.type = "checkbox";

  const label2 = document.createElement("input");
  label2.type = "text";
  label2.appendChild(document.createTextNode("opt2"));

  //------------------------------------------------------------//

  const opt3 = document.createElement("input");
  opt3.type = "checkbox";

  const label3 = document.createElement("input");
  label3.type = "text";
  label3.appendChild(document.createTextNode("opt3"));
  //-------------------------------------------------------------//

  const opt4 = document.createElement("input");
  opt4.type = "checkbox";

  const label4 = document.createElement("input");
  label4.type = "text";
  label4.appendChild(document.createTextNode("opt4"));
  //-------------------------------------------------------------//

  // create a submit button
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");

  //----------------------------------------------
  const br = document.createElement("br");
  // Append the question input to the form
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

  const bodycontainer = document.querySelector(".body");

  console.log(bodycontainer);
  bodycontainer.innerHTML = "";
  bodycontainer.appendChild(form);
};
