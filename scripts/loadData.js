const form = document.getElementById("form-elem");
const button = document.getElementById("submit");
const output = document.getElementById("output");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    const summary = document.querySelector("#summary");

    summary.style.display = "block";

    const fields = form.querySelectorAll("input, select, textarea");

    fields.forEach(function (field) {
      const id = field.getAttribute("id");
      let value = field.value;
      if (field.nodeName === "SELECT") {
        value = field.selectedOptions[0].text;
      }
      const paragraph = document.getElementById(id + "-p");
      if (paragraph) {
        paragraph.innerHTML = value;
      }
    });
    form.reset();
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
});
