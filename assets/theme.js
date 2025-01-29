var acc = document.getElementsByClassName("featured-product__accordion-trigger");
var i;
 const icon = accordion.querySelector('.featured-product__accordion-icon');
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    if (panel.style.display === 'block') {
      icon.textContent = '-'; // Change to minus when expanded
    } else {
      icon.textContent = '+'; // Change back to plus when collapsed
    }
  });
}