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
const sectionList = document.querySelectorAll('section');
const divFrag = document.createDocumentFragment();

for(let i = 0; i<sectionList.length;++i){
    const newLi  = document.createElement('li');
    var anch = document.createElement('a');
     
    anch.innerText = sectionList[i].getAttribute('data-nav');
    anch.href = '#'+ sectionList[i].getAttribute('id');

    
    newLi.addEventListener('click', function scrollToSection(event){
        event.preventDefault();
        sectionList[i].scrollIntoView({behavior: "smooth", block: "center"});
    });

    newLi.appendChild(anch);

    divFrag.appendChild(newLi);
}

document.querySelector('ul').appendChild(divFrag);

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function activeSection(event){
    for(let i = 0; i<sectionList.length;++i){

        var rect = sectionList[i].getBoundingClientRect();
        console.log('sec '+i+' '+rect.top)

        if(rect.top > -10 && rect.top < 200){
            
            for(const section of sectionList){    
                section.classList.remove('your-active-class');                
            }

            sectionList[i].classList.add('your-active-class');

        }
    }
});

let lis = document.querySelectorAll('li');
window.addEventListener('scroll', function activeLi(ev){
    for(let i = 0; i<lis.length;++i){

        if(sectionList[i].classList.contains('your-active-class')){
            for(const li of lis){
                
                li.classList.remove('your-active-li');
                
            }
            lis[i].classList.add('your-active-li');

        }

    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
