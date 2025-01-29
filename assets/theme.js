 function toggleAccordion(button) {
    // Get the associated content element
    const content = document.getElementById(button.getAttribute('aria-controls'));
    
    // Get the icon inside the button
    const icon = button.querySelector('.featured-product__accordion-icon');
    
    // Toggle the 'hidden' attribute on the content
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    content.hidden = isExpanded;
    
    // Toggle the icon text between '+' and '-'
    icon.textContent = isExpanded ? '+' : '-';
  }