// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  let software = request.get("User-Agent").split("(")[1].split(")")[0];
  
  response.json({
    ipaddress: request.get("X-Forwarded-For").split(",")[0],
    language: request.get("Accept-Language").split(",")[0],
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
