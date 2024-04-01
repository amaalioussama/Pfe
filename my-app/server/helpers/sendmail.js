const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure:true,
  auth: {
    
    user: "pfeeste2024@gmail.com",
    pass: " hzycjjvzfnptxzbc",
  },
});


async function Sendmail(to,subject,text,html,link) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Unicat 👻" <pfeeste2024@gmail.com>', // sender address
    to,
    subject, 
    text,
    html
  })

 

}
module.exports ={Sendmail}