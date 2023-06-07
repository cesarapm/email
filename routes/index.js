const { Router } = require("express");
const router = Router();

const nodemailer = require("nodemailer");

router.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "contacto@webgeoapm.com",
      pass: "Webapm123%",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: "Nuevo Contacto", // sender address,
    to: "geoapm@hotmail.com",
    subject: "Website Contact Form",
    //text: "Hello World",
    html: contentHTML,
  });

  res.json(info);
});

module.exports = router;
