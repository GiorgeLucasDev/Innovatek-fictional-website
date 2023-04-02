var collapsibles = document.querySelectorAll(".seta");

for (var i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.parentNode.nextElementSibling;
    if (content.style.display === "inline-block") {
      content.style.display = "none";
    } else {
      content.style.display = "inline-block";
    }
  });
}
