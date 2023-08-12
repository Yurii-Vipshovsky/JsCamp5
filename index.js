const express = require("express")
const app = express()

app.get('/', (req, res)=>{
    res.send("HI!")
})

app.get('/*', (req, res)=>{
    res.send("404 NOT FOND")
})

app.listen(3000, ()=>{
    console.log("APP started")
})