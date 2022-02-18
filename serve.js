const { readFileSync, watchFile } = require("fs");
const http = require("http");
const path = require("path");

const root = path.resolve(__dirname);
const readStatic = (path) => readFileSync(path);




const server = http.createServer((req, res) => {
    res.end(readStatic(root + "/index.html"));
});

server.listen(3000, "localhost");

watchFile(root + "/index.html", (curr, prev) => {
    server.close();
    server.listen(3000, "localhost");
})
