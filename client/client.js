const net = require("net");
const fs = require('fs');
const { StringDecoder } = require('string_decoder');
const fileName = process.argv[2];
const decoder = new StringDecoder('utf8');
const conn = net.createConnection({
  host: "localhost",
  port: 3030
});
//conn.setEncoding("utf8");
conn.on("connect", () => {
  conn.write(`${fileName}`);
});
conn.on("data", (data) => {
  if (decoder.write(data) === 'Error'){
    console.log('Error');
  } else {
    fs.writeFile(fileName, data, (err) => {
      if (err) console.log(err);
      if (!err) console.log('Done');
    });
  }
});