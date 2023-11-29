import React from 'react';

function Login() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="stylesheet" href="./global_log_in.css" />
        <link rel="stylesheet" href="./index_log_in.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
        />
      </head>
      <body>
        <div className="log-in">
          <div className="dont-have-an">Don’t have an account? Create one.</div>
          <b className="sign-in">Sign in</b>
          <div className="email-address">Email Address</div>
          <div className="log-in-child"></div>
          <div className="log-in-item"></div>
          <div className="password">Password</div>
          <div className="password">Password</div>
          <div className="log-in-inner"></div>
          <div className="log-in1">Log in</div>
          <b className="fantasy500">Fantasy500</b>
          <div className="ellipse-div"></div>
          <div className="log-in-child1"></div>
        </div>
      </body>
    </html>
  );
}

export default Login;
