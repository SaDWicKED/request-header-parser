
// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  return res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/whoami", (req, res) => {
  return res.json({
    ipaddress: req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress, 
    language: req.headers['accept-language'], 
    software: req.headers['user-agent']});
});

const port = process.env.PORT || 5000;
// listen for requests :)
const listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
