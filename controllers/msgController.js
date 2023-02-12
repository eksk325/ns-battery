const nodemailer = require("nodemailer");

async function sendEmail(userInfo) {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: `${process.env.MAIL_AD}`,
        pass: `${process.env.MAIL_PW}`,
      },
    });

    const mailOptions = {
      from: `${process.env.MAIL_AD}`,
      to: "danana418@gmail.com",
      subject: `${userInfo.name} 에게서 온 짧은 메세지`,
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <style>
            table {
              width: 250px;
              border: 1px solid black;
            }
      
            th {
              text-align: left;
            }
      
            td {
              text-align: right;
            }
          </style>
        </head>
        <body>
          <table>
            <tr>
              <th>이름:</th>
              <td>${userInfo.name}</td>
            </tr>
            <tr>
              <th>이메일:</th>
              <td>${userInfo.email}</td>
            </tr>
            <tr>
              <th>전화번호:</th>
              <td>${userInfo.phoneNum}</td>
            </tr>
          </table>
          <br />
          <p>${userInfo.message}</p>
        </body>
      </html> `,
    };

    const result = await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully" + info.response);
      }
    });
    return result;
  } catch (error) {
    return error;
  }
}

const getMsg = (req, res) => {
  res.sendFile(".../frontend/src/routes/ContactUs.js");
};

const postMsg = (req, res) => {
  sendEmail(req.body)
    .then((result) => {
      console.log("Email is sent");
      res.redirect("/#/contact-us");
    })
    .catch((error) => {
      console.log("An error occureed: " + error.message);
      res.send("Error :(");
    });
};

module.exports = { getMsg, postMsg };
