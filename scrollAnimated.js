window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  var abouts = document.querySelectorAll('.revealPull');
  var revealPoint = 150;

  abouts.forEach(function(element) {
    var revealTop = element.getBoundingClientRect().top;
    var revealBottom = element.getBoundingClientRect().bottom;

    if (revealBottom > 0 - revealPoint && revealTop < window.innerHeight + revealPoint) {
      element.classList.add('activePull');
    } 
  });

  reveals.forEach(function(element) {
    var revealTop = element.getBoundingClientRect().top;
    var revealBottom = element.getBoundingClientRect().bottom;

    if (revealBottom > 0 - revealPoint && revealTop < window.innerHeight + revealPoint) {
      element.classList.add('active');
    }
  });
}
