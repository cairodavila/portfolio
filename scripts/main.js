var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
  for(var i = 0; i < tabcontents.length; i++){
      tabcontents[i].style.display = "none";
  }
  for(var i = 0; i < tablinks.length; i++){
      tablinks[i].classList.remove("active-link");
  }
  document.getElementById(tabname).style.display = "block";
  event.currentTarget.classList.add("active-link");
}
// checks if the site is accessed on a mobile device //
function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

// text gets heavier when cursor is closer to it
document.addEventListener('DOMContentLoaded', () => {
const cursor = document.querySelector('.cursor');
const name = document.querySelector('.name');

function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

function updateCursor(mouseX, mouseY) {
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  const left = mouseX - scrollX;
  const top = mouseY - scrollY;
  cursor.style.left = `${left}px`;
  cursor.style.top = `${top}px`;
}

document.addEventListener('mousemove', (e) => {
  if (!isMobile()) {
    updateCursor(e.clientX, e.clientY);
    handleTextChange(e.clientX, e.clientY);
  }
});

function updateCursor(mouseX, mouseY) {
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  const left = mouseX - scrollX;
  const top = mouseY - scrollY;
  cursor.style.left = `${left}px`;
  cursor.style.top = `${top}px`;
}

document.addEventListener('mousemove', (e) => {
  updateCursor(e.clientX, e.clientY);

  const mouseX = e.clientX; // Get the current X coordinate of the mouse pointer
  const mouseY = e.clientY; // Get the current Y coordinate of the mouse pointer
  const boundingRect = name.getBoundingClientRect(); // Get the bounding rectangle of the .name element
  const offsetX = boundingRect.left + boundingRect.width / 2; // Calculate the X coordinate of the center of the .name element
  const offsetY = boundingRect.top + boundingRect.height / 2; // Calculate the Y coordinate of the center of the .name element
  const deltaX = mouseX - offsetX; // Calculate the horizontal distance between the mouse pointer and the center of the .name element
  const deltaY = mouseY - offsetY; // Calculate the vertical distance between the mouse pointer and the center of the .name element
  const percentX = deltaX / (boundingRect.width / 2); // Calculate the percentage of the maximum distance in the X direction
  const percentY = deltaY / (boundingRect.height / 2); // Calculate the percentage of the maximum distance in the Y direction
  const distance = Math.sqrt(percentX ** 2 + percentY ** 2); // Calculate the distance between the mouse pointer and the center of the .name element using the Pythagorean theorem
  const maxDistance = Math.sqrt(500); // Set the maximum distance between the mouse pointer and the center of the .name element
  const fontWeight = 300 + (800 - 300) * (1 - distance / maxDistance); // Calculate the font weight based on the distance between the mouse pointer and the center of the .name element
  name.style.transition = "font-weight 0.3s ease-out"; // Add a CSS transition to the font-weight property
  name.style.fontWeight = fontWeight; // Set the font weight of the .name element to the calculated value


  // Calculate the color based on the distance between the mouse pointer and the center of the .name element
  const r = Math.round(255 - (255 - 255) * (1 - distance / maxDistance));
  const g = Math.round(255 - (255 - 119) * (1 - distance / maxDistance));
  const b = Math.round(255 - (255 - 107) * (1 - distance / maxDistance));
  const color = `rgb(${r}, ${g}, ${b})`;
  
  name.style.transition = "font-weight 0.3s ease-out, color 0.3s ease-out";
  name.style.fontWeight = fontWeight;
  name.style.color = color; // Set the color of the .name element to the calculated value
});

window.addEventListener('scroll', () => {
  if (isMobile()) {
    handleTextChange();
  } else {
    updateCursor();
  }
});
});
  


/* Side Menu */
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0px";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}



/* 
// images
var images = document.querySelectorAll("img");
images.forEach(function(img) {
  img.addEventListener("mousemove", function() {
    var x = event.clientX;
    var y = event.clientY;
    var cursor = document.querySelector(".cursor");
    cursor.style.display = "block";
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});



/*   
// cursor
document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var cursor = document.querySelector(".cursor");
    cursor.style.display = "block";
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
  
  document.addEventListener("mouseleave", function() {
    var cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
  });
  
  var links = document.querySelectorAll("a");
  var cursor = document.querySelector(".cursor");
  
  links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
      if (link.hasAttribute("href")) {
        cursor.classList.add("hovered");
      }
    });
  
    link.addEventListener("mouseout", function() {
      cursor.classList.remove("hovered");
    });
  });
  
*/