document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    form.reset();
  });
});
