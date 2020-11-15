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
let timer = null;

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
      const items = nav.querySelectorAll(".menu__link");
      for (const el of items) {
        el == li
          ? (el.className = "menu__link menu__active__class")
          : (el.className = "menu__link");
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }
}



function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//handle if section in view port

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= 600 && rect.left >= 0;
}

function handleWindowScroll() {
  // When the user scrolls down 50px from the top of the document, show the button

  document.body.scrollTop > 50 || document.documentElement.scrollTop > 20
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");

    // add ative class to section in view port
    for (let i = 0; i < sections.length; i++) {
      isInViewport(sections[i])
        ? sections[i].classList.add("your-active-class")
        : sections[i].classList.remove("your-active-class");
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

nav.addEventListener("click", handleNavClick);

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
createNavBar();

//create the button
const toTop = document.createElement("button");
toTop.textContent = "Top";
toTop.classList.add("top");
document.body.appendChild(toTop);

// When the user clicks on the button, scroll to the top of the document

toTop.addEventListener("click", topFunction);

// When the user scroll 

window.addEventListener("scroll", handleWindowScroll, false);
