import express from "express";
import nodemailer from "nodemailer";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hello World!");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
    },
});

const mailOptions = {
  from: "",
  to: "",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
