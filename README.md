# Landing Page Project

The project was done by Yousef Tariq Adam

Languages used: HTML, CSS, and Javascript

Navigation:
-  The navigation bar was dynamically built using Javascript so that whenever we add a new section in the HTML file, it will generate a new nav 'li' element that refers to that section.
- Each navigation 'li' element gets its name from the 'data-nav' attribute from every section, and is referenced to section by getting its'id' attribute.

Active sections:
- The window listens to the scroll event and performs a function that loops over the section and gets its 'top' dimension using 'getBoundingClientRect()'.
- Then based on the 'top' dimension it decides which section is viewed on the viewport.
- This section is then given the class 'your-active-class', and the same class is removed from all the other sections.
- The same is applied to the nav 'li' elements, but this time it listens to click events.

Scroll to view:
- Clicking on the sections on the nav bar will automatically and smoothly scroll the page to the selected section.
