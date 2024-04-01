exports.emailreg = (username,link) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Unicat</title>
      <style>
        /* Styles spécifiques au design de l'e-mail */
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
    
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
    
        .header {
          background-color: #0867ec;
          color: #ffffff;
          text-align: center;
          padding: 20px;
        }
    
        .content {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
        }
    
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #999999;
          font-size: 14px;
        }
    
        .btn {
          display: inline-block;
          background-color: #0867ec;
          color: #ffffff;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
        }
    
        .btn:hover {
          background-color: #075bbf;
        }
    
        @media screen and (max-width: 600px) {
          .container {
            width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Unicat!</h1>
        </div>
        <div class="content">
          <p>Hi ,</p>
          <p>We're excited to welcome you to Unicat! 🎉</p>
          <p>At Unicat, we're dedicated to providing you with an exceptional experience. Whether you're here to connect with others, explore new interests, or simply relax, we've got something for you.</p>
          <p>Feel free to explore our platform and discover the many features we offer. If you have any questions or need assistance, our team is here to help.</p>
          <p>Click the button below to get started:</p>
          <p><a href="${link}" class="btn" style="color: white;">verifier votre compte</a></p>
          <p>We hope you enjoy your time with us!</p>
          <p>Best regards,<br>The Unicat Team</p>
        </div>
        <div class="footer">
          © 2024 Unicat. All rights reserved.
        </div>
      </div>
    </body>
    </html>
    
    `;
}
