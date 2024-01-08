function toggleSubpage() {
  var subpage = document.getElementById("subpage");
  if (subpage.style.display === "none") {
    subpage.style.display = "block";
  } else {
    subpage.style.display = "none";
  }
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var phoneNumber = "+27836074964";
  var messageText =
    "New form submission:\n\nName: " +
    name +
    "\nEmail: " +
    email +
    "\nSubject: " +
    subject +
    "\nMessage: " +
    message;
  alert("Form submitted successfully!\n\n" + messageText);

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, subject, message }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
