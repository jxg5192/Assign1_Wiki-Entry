"use strict";


let characterImages = document.querySelectorAll(".card img");

characterImages.forEach(img => {
  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.3)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
  });
});

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "rotate(5deg) scale(1.1)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "rotate(0deg) scale(1)";
  });
});

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.filter = "brightness(1.1)";
  });
  img.addEventListener("mouseout", () => {
    img.style.filter = "brightness(1) saturate(1)";
  });
});

let quotes = document.querySelectorAll(".hidden-quote");

quotes.forEach(function(quote) {
  // Store the real text in a variable
  let actualText = quote.innerHTML;

  // Replace the visible text with the placeholder
  quote.innerHTML = "Click me!";

  quote.addEventListener("click", function () {
    if (quote.innerHTML === "Click me!") {
      // Show the real text
      quote.innerHTML = actualText;
      quote.style.backgroundColor = "rgba(255,75,92,.15)";
      quote.style.fontWeight = "bold";
    } else {
      // Reset to placeholder
      quote.innerHTML = "Click me!";
      quote.style.backgroundColor = "rgba(230, 247, 237, 0.6)";
      quote.style.fontWeight = "normal";
    }
  });
});


// // Only run on the story page
// if (document.body.classList.contains("story-page")) {
//   let storyBox = document.querySelector("main"); // the white inner box

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 50) {
//       storyBox.style.backgroundColor = "rgba(230, 247, 237, 0.6)"; // light pink
//     } else {
//       storyBox.style.backgroundColor = "white"; // reset to white
//     }
//   });
// }



if (document.body.classList.contains("story-page")) {
  let elements = document.querySelectorAll("main p, main blockquote, main li, main h3");

  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY + window.innerHeight / 2;  
    // Use middle of the screen as the "reading point"

    elements.forEach(function (el) {
      let elTop = el.offsetTop;

      if (elTop < scrollY) {
        // Already scrolled past -> fade it
        el.classList.add("faded");
      } else {
        // Not yet read -> keep normal
        el.classList.remove("faded");
      }
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggleBtn");

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      details.classList.toggle("hide");

      // update button text
      if (details.classList.contains("hide")) {
        btn.textContent = "Learn More!";
      } else {
        btn.textContent = "Hide Details";
      }
    });
  });
});
