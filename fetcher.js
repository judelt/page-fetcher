let args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(args[0], function (error, response, body) {
  if(error) {
    console.log(error);
    return;
  }
  fs.writeFile(args[1], body, function (err) {
    if (err) throw err;
  });
  console.log('Downloaded and saved ' + body.length + ' bytes to ' + args[1]);
});


// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
