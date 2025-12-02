/**
 * 
 * Muudab sticky päise tausta natuke läbipaistvaks,
 * kui kasutaja on kerinud rohkem kui päise kõrguse võrra.
 *
 * Allikas / inspiratsioon:
 * - Kohandatud lahendus ChatGPT abiga
 *
**/

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;

  function toggleHeaderOpacity() {
    if (window.scrollY > headerHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", toggleHeaderOpacity);
});
