const app = require("../app")
const receber = require("../controller/enviarLocalizacao")


app.use("/", receber)




