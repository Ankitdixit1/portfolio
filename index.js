const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '25px',
  duration: 2500,
  reset: true
})

sr.reveal('.home-text', { delay: 190, origin: 'bottom' })

sr.reveal('.about,.services,.portfolio,.contact', { delay: 200, origin: 'bottom' })

// Sendmail function

function sendMail(event) {
  event.preventDefault(); // Prevent default form submission behavior

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_2qp66xt";
  const templateID = "template_zijm1zk";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = ""; // Fix: Added .value
      document.getElementById("message").value = "";

      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => {
      console.log(err);
      alert("An error occurred while sending the message. Please try again.");
    });
}

//copy clip board email function
document.getElementById('emailLink').addEventListener('click', function(event) {
  event.preventDefault();
  var email = this.textContent.trim();
  copyToClipboard(email);
  showAlert('Email copied to clipboard!');
});

function copyToClipboard(text) {
  var textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function showAlert(message) {
  alert(message);
}

// scrolling function

