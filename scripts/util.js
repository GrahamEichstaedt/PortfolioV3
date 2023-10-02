/**
 * Given an HTML element, checks if the given element is ENTIRELY
 * contained by the viewport, such that no part of the element protrudes
 * outside of the viewport. If so, returns true. Otherwise, return false.
 * 
 * @param {HTMLElement} element 
 * @returns {Boolean}
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


  /**
   * Event handler for scroll events. Used to add a class to an element as soon 
   * as it becomes visible in the viewport.
   * 
   * @param {Element} element 
   */
  function handleScroll(element) {

    if(isInViewport(element) && !element.classList.contains('animate')) {
        element.classList.add('animate');
        console.log('Added class');


        // window.removeEventListener('scroll', handleScroll);
        // console.log('Removed event handler');
    }
  }


document.addEventListener("DOMContentLoaded", function() {
    const education = document.getElementsByClassName('fade-in')[0];
    const elements = document.getElementsByClassName('fade-in');
  
    // Checks if education is exists
    if(education) {
        window.addEventListener('scroll', function() {
            handleScroll(education);
        });

        handleScroll(education);    // Run on page load
    }
    else {
        console.error('Element with an ID of "education" was not found');
    }
  });

