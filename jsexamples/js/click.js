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

  // Replacing the visible text 'click me' till it gets clicked
  quote.innerHTML = "Click me!";

  quote.addEventListener("click", function () {
    if (quote.innerHTML === "Click me!") {
      // when user clicks, if current text is 'click me', show the real text & turn it pink
      quote.innerHTML = actualText;
      quote.style.backgroundColor = "rgba(255,75,92,.15)";
    } else {
      // when user clicks, if current text is the quote, switch back to 'click me' & blue 
      quote.innerHTML = "Click me!";
      quote.style.backgroundColor = "rgba(230, 247, 237, 0.6)";
      quote.style.fontWeight = "normal";
    }
  });
});



// only for the story page, grab the paragpahs, blockquotes, lists, and h3
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



  // grabbing all the buttons
  let toggles = document.querySelectorAll(".toggleBtn");

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {

      // grabbing details for that card to show fun facts & personality info
      let details = btn.nextElementSibling;
      details.classList.toggle("hide");  

      // update button text when clickied
      if (details.classList.contains("hide")) {
        btn.textContent = "Learn More!";
      } else {
        btn.textContent = "Hide Details";
      }
    });
  });





  document.getElementById("meadow").addEventListener("click", function(){
    document.getElementById("meadow").style.border = "2px dashed green";
    document.getElementById("forest").style.border = "2px solid rgba(255,111,97,0.6)";
  }); 



   document.getElementById("forest").addEventListener("click", function(){
    document.getElementById("forest").style.border = "2px dashed green";
    document.getElementById("meadow").style.border = "2px solid rgba(255,111,97,0.6)";
  }); 