/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section[data-nav]");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function handleNavClick(e) {
  const li = e.target;
  for (const section of sections) {
    if (
      li.nodeName === "LI" &&
      li.getAttribute("data-nav") == section.getAttribute("id")
    ) {
      // Scroll to section on link click

      window.scrollTo({
        top: section.offsetTop,
        left: 0,
        behavior: "smooth",
      });

      // Set sections as active

      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
function createNavBar() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < sections.length; i++) {
    const newElement = document.createElement("li");
    newElement.textContent = sections[i].getAttribute("id");
    newElement.setAttribute("data-nav", `${sections[i].getAttribute("id")}`);
    newElement.classList.add("menu__link");

    fragment.appendChild(newElement);
  }

  nav.appendChild(fragment);
}

// build the nav

nav.addEventListener("click", handleNavClick);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
createNavBar();
