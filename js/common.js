let el = document.querySelectorAll('.skill-trigger');

el.forEach(function(element) {
    let elWidth = element.getAttribute('data-width');
    element.style.width = elWidth + '%';
});
