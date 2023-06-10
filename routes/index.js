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
        </br>
        </br>
        </br>
        <p>https://api.whatsapp.com/send?phone=${phone}&text=Buen%20d%C3%ADa%2C%20me%20interesa%20saber%20m%C3%A1s%20informaci%C3%B3n%20para%20tu%20sitio%20Web</p>


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

    html: contentHTML,
  });

  res.json(info);
});

module.exports = router;
