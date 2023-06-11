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
       
        <a href="https://api.whatsapp.com/send?phone=${phone}&text=Buen%20d%C3%ADa%2C%20me%20interesa%20saber%20m%C3%A1s%20informaci%C3%B3n%20para%20tu%20sitio%20Web">Link Whatsapp</a>

    `;
  contentHTML2 = `
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
    //to: "geoapm@hotmail.com",
    to: "garyfeomm@gmail.com",
    subject: "Website Contact Form",

    html: contentHTML,
  });

  let info2 = await transporter.sendMail({
    from: "contacto@webgeoapm.com", // sender address,
    // to: "geoapm@hotmail.com",
    to: email,
    subject: "Somos Desarrolladores Web",

    html: contentHTML2,
  });

  //res.json(info);
  res.json(info2);
});

module.exports = router;
