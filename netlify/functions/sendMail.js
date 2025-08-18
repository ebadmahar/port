const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Message from ${name}`,
    text: `
You have received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
