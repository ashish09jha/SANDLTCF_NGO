import nodemailer from "nodemailer";
import dotenv from "dotenv";

const verification = (Email,message) => {
  dotenv.config({
    path: "./.env",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD, 
    },
  });

  const mailOptions = {
    from: {
      name: "Devesh Kumar Srivastav",
      address: process.env.USER,
    },
    to: [`${Email}`],
    subject: "OTP VERIFICATION",
    text: `${message}`,
    html:`<b>${message}</b>`,
  };

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("mail send successfully");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  sendMail(transporter, mailOptions);
};

export  {verification};