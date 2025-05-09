const express = require("express")
const route = express.Router()




route.get("/", (req,res) => {
    const userAgent = req.headers['user-agent'];
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.status(200).send({ola : "aqui"})
    

    
})

module.exports = route