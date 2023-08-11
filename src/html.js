import React from "react";

function html(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" id="favicon" />
        <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600,700' rel='stylesheet' type='text/css' />
        <title>TruPaid</title>
        {props.headComponents}
      </head>
      <body style={{}}>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

export default html;
