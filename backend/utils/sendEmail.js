const nodeMailer = require("nodemailer");

exports.sendEmail = async options => {
    const transport = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    console.log(options.email)

    const message = {
        from: `${process.env.SMTP_SOURCE_EMAIL} <${process.env.COMPANY_NAME}>`,
        to: options.email,
        subject: options.subject,
        html: options.message
    };

    await transport.sendMail(message, (error, info) => {
        if (error) throw error;

        console.log(info.response);
    });
}