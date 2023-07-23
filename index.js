const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
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

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

// doflf
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, subject, message } = JSON.parse(event.body);

  // Setup the email transport
  const credentials = process.env.GMAIL_CREDENTIALS.split(':');
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: credentials[0], // Extract the username
      pass: credentials[1], // Extract the password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: email,
      to: "portfolio.web87@gmail.com", // Replace with your email address
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return {
      statusCode: 200,
      body: "Email sent successfully!",
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: "Failed to send the email. Please try again later.",
    };
  }
};

