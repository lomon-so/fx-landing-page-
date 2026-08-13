/* ============================================================
   GIANT CLAN — CUSTOM JAVASCRIPT
   File: js/script.js

   Handles:
   1. Preloader — hides after page loads
   2. Sticky Navbar — adds class when user scrolls
   3. Scroll Reveal — fades in elements as they enter view
============================================================ */


/* ============================================================
   1. PRELOADER
   Hides the loading screen once the full page has loaded.
============================================================ */

window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');

  if (preloader) {
    // Short delay so the spinner is visible for at least a moment
    setTimeout(function () {
      preloader.classList.add('hidden');
    }, 600);
  }
});


/* ============================================================
   2. STICKY NAVBAR
   Adds the class "scrolled" to #navbar when the user
   scrolls past 60px — CSS handles the visual change.
============================================================ */

var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (!navbar) return;

  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ============================================================
   3. SCROLL REVEAL
   Any element with class "reveal" starts hidden (via CSS).
   When it enters the viewport, the class "visible" is added
   and CSS transitions it into view.
============================================================ */

var revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stop watching once it's visible — no need to re-animate
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12, // Trigger when 12% of the element is visible
    }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });
}
