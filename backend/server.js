require("dotenv").config();

const express = require("express");
const batteryRoutes = require("./routes/batteries");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname + "tmp")));

// MULTER
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp");
  },
  filename: function (req, file, cb) {
    cb(null, "uploaded" + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage }).single("userImage");

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
      subject: `${userInfo.name} 에게서 온 배터리 요청 메세지`,
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
          <table>
            <tr>
              <th>차 브랜드:</th>
              <td>${userInfo.carMake}</td>
            </tr>
            <tr>
              <th>모델:</th>
              <td>${userInfo.carModel}</td>
            </tr>
            <tr>
              <th>년도:</th>
              <td>${userInfo.carYear}</td>
            </tr>
            <tr>
              <th>IDLE 여부:</th>
              <td>${userInfo.idle}</td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <th>디멘션</th>
              <td>${userInfo.length}, ${userInfo.width}, ${userInfo.height}</td>
            </tr>
          </table>
          <br />
          <img src="cid:uploadedImg" style={"width: 350px", "height: auto"} />
        </body>
      </html>`,
      attachments: [
        {
          path: userInfo.path,
          cid: "uploadedImg",
        },
      ],
    };

    const result = await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully" + info.response);
        deleteTmp();
      }
    });

    return result;
  } catch (error) {
    return error;
  }
}

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/batteries", batteryRoutes);

// Enquiry Form -> Email
app.get("/send-form", (req, res) => {
  res.sendFile("../frontend/src/js/EnquiryForm.js");
});

app.post("/send-form", (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      console.log("Error with uploading file");
    } else {
      let userInfo = {
        name: req.body.name,
        email: req.body.email,
        phoneNum: req.body.phoneNum,
        carMake: req.body.carMake,
        carModel: req.body.carModel,
        carYear: req.body.carYear,
        idle: req.body.idleText,
        length: req.body.length,
        width: req.body.width,
        height: req.body.height,
        path: req.file.path,
      };

      console.log(userInfo);

      sendEmail(userInfo)
        .then((result) => {
          console.log("Email is sent");
          res.redirect("/#/submitted");
        })
        .catch((error) => {
          console.log("An error occured: " + error.message);
          res.send("Error :(");
        });
    }
  });
});

function deleteTmp() {
  const directory = "./tmp";

  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log("Error reading directory");
      return;
    }

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) {
          console.log("Error removing files");
        } else {
          console.log("Images deleted successfuly");
        }
      });
    }
  });
}

// Conncect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests only after connecting to the database
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
