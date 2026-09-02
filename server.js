const http = require("http");
const server = http.createServer((req, res) => {
res.writeHead(200, {
  "Content-Type": "text/html"
});
res.end(`
<h1>Welcome to Node.js</h1>
<p>HTTP Server is running successfully.</p>
`);
});
server.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});