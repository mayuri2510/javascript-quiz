import { navbar } from "./navbar.js";
import { footer } from "./footer.js";

/**
 * The page layout component.
 *
 * @param {Function | HTMLElement} bodyComponent - The body for the newly rendered page.
 * @param {object} routes - The application's routes, for the navbar.
 * @returns {HTMLDivElement} A rendered page element.
 * @throws {TypeError} When the bodyComponent is not a function or DOM element.
 */
export const page = (bodyComponent, routes) => {
  const container = document.createElement("div");
  container.classList = "mayuri";

  console.log("r---", routes);

  container.appendChild(navbar(routes));
  if (typeof bodyComponent === "function") {
    container.appendChild(bodyComponent());
  } else if (bodyComponent instanceof Element) {
    container.appendChild(bodyComponent);
  } else {
    throw new TypeError("body is not a function or a DOM element");
  }
  container.appendChild(footer());

  return container;
};

// body component - <div class=body>
// routes is array who contains ->
//0: {name: "home", path: "/", callback: ƒ}
//1: {name: "quiz", path: "/quiz", callback: ƒ}
//2: {name: "questions", path: "/questions", callback: ƒ}
//length: 3;
