function emailSend() {
  var params = {
    fromName: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_hautq5i", "template_q9v61bl", params)
    .then(function (res) {
      alert("Success!", res.status);
    });
}

// document.getElementById("contact").addEventListener("submit", emailSend);
