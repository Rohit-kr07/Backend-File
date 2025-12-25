 const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync('./cert/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello from secure HTTPS server!');
}).listen(8070, () => {
  console.log("HTTPS Server running at https://localhost:8070");
});
