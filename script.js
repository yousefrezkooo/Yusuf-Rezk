document.addEventListener("DOMContentLoaded", function() {
    let nav = document.getElementById("nav");

    nav.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            let li = event.target.parentElement;

            // Remove 'active' from all <li> elements
            let navLIs = nav.querySelectorAll("li");
            navLIs.forEach(item => item.classList.remove("active"));

            // Add 'active' to the clicked <li>
            li.classList.add("active");
        }
    });
    let text ="Hi, I'm Yusuf Rezk."
    let index =0
    let speed = 100
    function typeWriter() {
        if (index < text.length){
            document.getElementById("intro").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("intro").style.borderRight = "none"; // Hide cursor at end
        }

    }
    window.onload = typeWriter();
    // Create the cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Move the cursor smoothly
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Add hover effect on links
const hoverTargets = document.querySelectorAll('a, button');

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

});



