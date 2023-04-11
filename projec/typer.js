window.addEventListener('load', function() {
  animateText('myText1', 350);
  animateText('myText2', 350);
  animateText('myText3', 350);
  
});

function animateText(elementId, delay) {
  setTimeout(function() {
    var element = document.getElementById(elementId);
    var text = element.textContent;
    var index = 0;

    element.textContent = '';

    function typeWriter() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    }

    typeWriter();
  }, delay);
}
