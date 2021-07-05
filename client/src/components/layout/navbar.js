/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = (routes) => {
  const container = document.createElement("nav");
  container.className = "navbar";

  for (const route of routes) {
    const anchor = document.createElement("a");
    anchor.innerHTML = route.name;
    //  console.log("route-name", route.name);
    anchor.href = route.path;
    console.log("route-path", route.path);

    anchor.setAttribute("data-navigo", "");

    container.appendChild(anchor);
  }

  return container;
};
