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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const nav = document.querySelector('#navbar__list');
// const list = document.createElement('li');
const sections = document.querySelectorAll('section[data-nav]');
const section = document.querySelector('#section3');
// console.log(document.querySelectorAll('section[data-nav]'));





function createNavBar() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < sections.length; i++) {
        const newElement = document.createElement('li');
        newElement.textContent = sections[i].getAttribute('id');
        newElement.setAttribute('data-nav',`${sections[i].getAttribute('data-nav')}`)
        newElement.classList.add('menu__link')

        fragment.appendChild(newElement);
    }

    nav.appendChild(fragment);
   
}
function handleNavClick(e) {
    const li = e.target;
    if ( li.nodeName === 'LI') {
        // console.log(li.getAttribute("data-nav"));
        for (const sec of sections) {
            console.log(sec.getAttribute("data-nav") + li.getAttribute("data-nav"));
            if (li.getAttribute("data-nav") == sec.getAttribute("data-nav")) {
                console.log('true');
                window.scrollTo({
                    top: sec.offsetTop,
                    left: 0,
                    behavior: 'smooth'
                }
                );
                sec.classList.add("your-active-class")
            }
            else {
                sec.classList.remove("your-active-class")

            }
            
        }
       
    }
}
nav.addEventListener('click', handleNavClick)
createNavBar();

// console.log(document.querySelector('li').offsetTop);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


