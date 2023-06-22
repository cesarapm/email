const { Router } = require("express");
const router = Router();

const nodemailer = require("nodemailer");

router.post("/renviar", async (req, res) => {
  const { name, email } = req.body;

  contentHTML = `
    <h1>Buen día.</h1>
  
        <h3>Hola ${name}</h3>
        <h3>Recibimos tu Mensaje sobre Inf de Servicio de programación web.</h3>
        <h3>Si deseas mas Inf nos puedes Contactar vía WhatsApp: <a href="https://acortar.link/7KYawS">Link Whatsapp</a>
        </h3>
        <h3>o por este medio</h3>
        <h3>Saludos</h3>

  

   
   
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
      rejectUnauthorized: true,
    },
  });

  let info = await transporter.sendMail({
    from: "contacto@webgeoapm.com", // sender address,
    // to: "geoapm@hotmail.com",
    to: email,
    subject: "Somos Desarrolladores Web",

    html: contentHTML,
  });

  //res.json(info);
  res.redirect("/success.html");
});

module.exports = router;
