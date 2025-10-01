"use strict";



// character page 
let characterImages = document.querySelectorAll(".card img");

// zoom in on character pics on hover
for (let i = 0; i < characterImages.length; i++) {
  let img = characterImages[i];

  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.3)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
  });
}

// rotate character pics on hover
for (let i = 0; i < characterImages.length; i++) {
  let img = characterImages[i];

  img.addEventListener("mouseover", function () {
    img.style.transform = "rotate(5deg) scale(1.1)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "rotate(0deg) scale(1)";
  });
}

// make character pics brighter on hover
for (let i = 0; i < characterImages.length; i++) {
  let img = characterImages[i];

  img.addEventListener("mouseover", function () {
    img.style.filter = "brightness(1.1)";
  });

  img.addEventListener("mouseout", function () {
    img.style.filter = "brightness(1) saturate(1)";
  });
}


// grab all elements with hidden-quote from the story page
let quotes = document.querySelectorAll(".hidden-quote");

// Loop through each 
for (let i = 0; i < quotes.length; i++) {
  let quote = quotes[i];

  // Store the actual quote text from the story
  let actualText = quote.innerHTML;

  // Replace the visible text with "Click me!" until it gets clicked
  quote.innerHTML = "Click me!";

  //  click event listener for  quote
  quote.addEventListener("click", function () {
    if (quote.innerHTML === "Click me!") {
      // If current text is "Click me!" show the real text & turn it pink
      quote.innerHTML = actualText;
      quote.style.backgroundColor = "rgba(255,75,92,.15)";
    } else {
      // Otherwise switch back to "Click me!" & reset 
      quote.innerHTML = "Click me!";
      quote.style.backgroundColor = "rgba(230, 247, 237, 0.6)";
      quote.style.fontWeight = "normal";
    }
  });
}



// Only for the story page, grab the paragraphs, blockquotes, lists, and h3
if (document.body.classList.contains("story-page")) {
  let elements = document.querySelectorAll("main p, main blockquote, main li, main h3");

  // Scroll event listener
  window.addEventListener("scroll", function () {

    // Use middle of the screen as the "reading point" so that as you scroll, the font greys out
    // chatgpt helped me with this
    let readingPoint = window.scrollY + window.innerHeight / 2;  

    // Loop through each element with a classic for loop
    for (let i = 0; i < elements.length; i++) {
      let el = elements[i];

      // If the element's top is above the reading point, fade it
      if (el.offsetTop < readingPoint) {
        el.classList.add("faded");
      } else {
        // Otherwise keep  normal
        el.classList.remove("faded");
      }
    }
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



// when click on meadow, change its border
  document.getElementById("meadow").addEventListener("click", function(){
    document.getElementById("meadow").style.border = "2px dashed green";
    document.getElementById("forest").style.border = "2px solid rgba(255,111,97,0.6)";
  }); 


// when click on forest, change its border
   document.getElementById("forest").addEventListener("click", function(){
    document.getElementById("forest").style.border = "2px dashed green";
    document.getElementById("meadow").style.border = "2px solid rgba(255,111,97,0.6)";
  }); 