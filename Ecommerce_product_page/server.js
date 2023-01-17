const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
	const page = url.parse(req.url).pathname;
	const params = querystring.parse(url.parse(req.url).query);
	console.log(page);

	if (page == "/") {
		fs.readFile("index.html", (err, data) => {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page == "/assets/styles.css") {
		fs.readFile("./assets/styles.css", (err, data) => {
			res.write(data);
			res.end();
		});
	} else if (page == "/assets/index.js") {
		fs.readFile("./assets/index.js", (err, data) => {
			res.writeHead(200, { "Content-Type": "text/javascript" });
			res.write(data);
			res.end();
		});
	}
});

server.listen(5000);
