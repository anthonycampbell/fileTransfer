const net = require("net");
const server = net.createServer();
const fs = require('fs');
server.on("connection", (client) => {
  client.setEncoding("utf8");
  client.on("data", (data) => {
    fs.readFile(data, (err, file) => {
      if (!err) client.write(file);
      if (err) client.write("Error", 'utf8');
      client.destroy();
    });
  });
});
server.listen(3030, () => {
  console.log("Server listening on port 3000!");
});

