import nodemailer from "nodemailer";

function mailVerification(Email, Message) {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "maddison53@ethereal.email",
            pass: "jn7jnAPss4f63QBp6D",
        },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        const info = await transporter.sendMail({
            from: '<maddison53@ethereal.email>', 
            to: Email,
            subject: "OTP for verification",
            text: Message, 
            html: `<b>${Message}</b>`,
        });

        console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);
}

export { mailVerification };
