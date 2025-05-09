require("./src/routes/rotareceberinfor")
const http = require("http")
const app = require("./src/app")


const server = http.createServer(app);

server.listen(5000, () => {
    console.log("Rodando : http://localhost:5000");
});