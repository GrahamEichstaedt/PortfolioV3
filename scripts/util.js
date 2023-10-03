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
        rect.top <= 0 &&    // top of element is in viewport
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
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
    const education = document.getElementById('education');
  
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

