  var acc = document.getElementsByClassName("featured-product__accordion-trigger");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      
      var panel = this.nextElementSibling;
      var icon = this.querySelector(".featured-product__accordion-icon");
      
      // Toggle panel display
      if (panel.style.display === "block") {
        panel.style.display = "none";
        icon.textContent = "+";  // Change icon to plus when collapsed
      } else {
        panel.style.display = "block";
        icon.textContent = "-";  // Change icon to minus when expanded
      }
    });
  }